// // // import React, { useEffect } from 'react';
// // // import Layout from './Layout';
// // // import FormEditProduct from '../components/FormEditProduct.';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { useNavigate } from 'react-router-dom';
// // // import { getMe } from '../features/authSlice';

// // // const EditProduct = () => {
// // // 	const dispatch = useDispatch();
// // // 	const navigate = useNavigate();
// // // 	const { isError } = useSelector((state) => state.auth);

// // // 	useEffect(() => {
// // // 		dispatch(getMe());
// // // 	}, [dispatch]);

// // // 	useEffect(() => {
// // // 		if (isError) {
// // // 			navigate('/');
// // // 		}
// // // 	}, [isError, navigate]);
// // // 	return (
// // // 		<Layout>
// // // 			<FormEditProduct />
// // // 		</Layout>
// // // 	);
// // // };

// // // export default EditProduct;

// // // import React, { useEffect } from 'react';
// // // import Layout from './Layout';
// // // import FormEditProduct from '../components/FormEditProducts';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { useNavigate } from 'react-router-dom';
// // // import { getMe } from '../features/authSlice';

// // // const EditProduct = () => {
// // // 	const dispatch = useDispatch();
// // // 	const navigate = useNavigate();
// // // 	const { isError } = useSelector((state => state.auth));

// // // 	useEffect(() => {
// // // 		dispatch(getMe());
// // // 	}, [dispatch]);

// // // 	useEffect(() => {
// // // 		if (isError) {
// // // 			navigate('/');
// // // 		}
// // // 	}, [isError, navigate]);
// // // 	return (
// // // 		<Layout>
// // // 			<FormEditProduct />
// // // 		</Layout>
// // // 	);
// // // };

// // // export default EditProduct;

// // import React, { useEffect } from 'react';
// // import Layout from './Layout';
// // import FormEditProduct from '../components/FormEditProducts';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// // import { getMe } from '../features/authSlice';

// // const EditProduct = () => {
// // 	const dispatch = useDispatch();
// // 	const navigate = useNavigate();
// // 	const { isError } = useSelector((state) => state.auth);

// // 	useEffect(() => {
// // 		dispatch(getMe());
// // 	}, [dispatch]);

// // 	useEffect(() => {
// // 		if (isError) {
// // 			navigate('/');
// // 		}
// // 	}, [isError, navigate]);
// // 	return (
// // 		<Layout>
// // 			<FormEditProduct />
// // 		</Layout>
// // 	);
// // };

// // export default EditProduct;

// import React, { useEffect } from 'react';
// import Layout from './Layout';
// import FormEditUser from '../components/FormEditUser';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getMe } from '../features/authSlice';

// const EditUser = () => {
// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();
// 	const { isError, user } = useSelector((state) => state.auth);

// 	useEffect(() => {
// 		dispatch(getMe());
// 	}, [dispatch]);
// 	useEffect(() => {
// 		if (isError) {
// 			navigate('/');
// 		}
// 		if (user && user.email !== 'admin') {
// 			navigate('/dashboard');
// 		}
// 	}, [isError, user, navigate]);
// 	return (
// 		<Layout>
// 			<FormEditUser />
// 		</Layout>
// 	);
// };

// export default EditUser;

// import React, { useEffect } from 'react';
// import Layout from './Layout';
// import FormEditProduct from '../components/FormEditProducts';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getMe } from '../features/authSlice';

// const EditProduct = () => {
// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();
// 	const { isError } = useSelector((state => state.auth));

// 	useEffect(() => {
// 		dispatch(getMe());
// 	}, [dispatch]);

// 	useEffect(() => {
// 		if (isError) {
// 			navigate('/');
// 		}
// 	}, [isError, navigate]);
// 	return (
// 		<Layout>
// 			<FormEditProduct />
// 		</Layout>
// 	);
// };

// export default EditProduct;

import React, { useEffect } from 'react';
import Layout from './Layout';
import FormEditProduct from '../components/FormEditProduct.';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const EditProduct = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isError } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getMe());
	}, [dispatch]);

	useEffect(() => {
		if (isError) {
			navigate('/');
		}
	}, [isError, navigate]);
	return (
		<Layout>
			<FormEditProduct />
		</Layout>
	);
};

export default EditProduct;
