import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getProducts = async(req, res)=> {
    try{
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
             attributes: ['uuid', 'name', 'price'],
             include: [{
                model: User,
                attributes: ['name', 'email']
             }]
            });
        }
        else{
            response = await Product.findAll({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    userId : req.userId
                },
                include: [{
                model: User,
                attributes: ['name', 'email']
             }]
            });
        }
        res.status(200).json(response);
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

export const getProductById = async(req, res)=> {
    try{
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "unknown"})
        let response;
        if(req.role === "admin"){
            response = await Product.findOne({
             attributes: ['uuid', 'name', 'price'],
              where: {
                id: product.id
            },
             include: [{
                model: User,
                attributes: ['name', 'email']
             }]
            });
        }else{
            response = await Product.findOne({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    [Op.and]:[{id: product.id}, {userId: req.userId}],
                    userId : req.userId
                },
                include: [{
                model: User,
                attributes: ['name', 'email']
             }]
            });
        }
        res.status(200).json(response);
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

export const createProduct = async(req, res)=> {
    const {name, price} = req.body;
    try {
        await Product.create({
            name: name,
            price: price,
            userId: req.userId
        });
        res.status(201).json({msg: "Data telah dibuat"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateProduct = async(req, res)=> {
     try{
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "unknown"})
        const {name, price} = req.body;
        if(req.role === "admin"){
            await Product.update({name, price}, {
                where: {
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Access denied"})
             await Product.update({name, price}, {
                 where: {
                    [Op.and]:[{id: product.id}, {userId: req.userId}],
                    userId : req.userId
                },
            });
        }
        res.status(200).json({msg: "data updated"});
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

export const deleteProduct = async(req, res)=> {
     try{
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "unknown"})
        const {name, price} = req.body;
        if(req.role === "admin"){
            await Product.destroy({
                where: {
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Access denied"})
             await Product.destroy({name, price}, {
                 where: {
                    [Op.and]:[{id: product.id}, {userId: req.userId}],
                    userId : req.userId
                },
            });
        }
        res.status(200).json({msg: "data deleted"});
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}