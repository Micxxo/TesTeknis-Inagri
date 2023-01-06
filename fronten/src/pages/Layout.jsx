// // import React from 'react';
// // import Navbar from '../components/Navbar';
// // import Sidebar from '../components/Sidebar';
// // import Welcome from '../components/Welcome';

// // const Layout = ({ children }) => {
// // 	return (
// // 		<React.Fragment>
// // 			<Navbar />
// // 			<div className="d-flex bg-">
// // 				<Sidebar />
// // 				<Welcome />
// // 			</div>
// // 		</React.Fragment>
// // 	);
// // };

// // export default Layout;

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';

// const Layout = ({ children }) => {
// 	return (
// 		<React.Fragment>
// 			<Navbar />
// 			<div
// 				className="columns mt-6 has-background-grey-light"
// 				style={{ minHeight: '100vh' }}
// 			>
// 				<div className="column is-2">
// 					<Sidebar />
// 				</div>
// 				<div className="column has-background-grey-lighter">
// 					<main>{children}</main>
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default Layout;

// // import React from 'react';
// // import { Navbar } from '../components/Navbar';
// // import Sidebar from '../components/Sidebar';

// // const Layout = ({ children }) => {
// // 	return (
// // 		<React.Fragment>
// // 			<Navbar />
// // 			<div className="columns mt-6" style={{ minHeight: '100vh' }}>
// // 				<div className="column is-2">
// // 					<Sidebar />
// // 				</div>
// // 				<div className="column has-background-light">
// // 					<main>{children}</main>
// // 				</div>
// // 			</div>
// // 		</React.Fragment>
// // 	);
// // };

// // export default Layout;

// import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// const Layout = ({ children }) => {
//   return (
//     <React.Fragment>
//       <Navbar />
//       <div className="columns mt-6" style={{ minHeight: "100vh" }}>
//         <div className="column is-2">
//           <Sidebar />
//         </div>
//         <div className="column has-background-light">
//           <main>{children}</main>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Layout;

import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="columns mt-6 has-background-dark" style={{ minHeight: '100vh' }}>
				<div className="column is-2">
					<Sidebar />
				</div>
				<div className="column has-background-grey-lighter">
					<main>{children}</main>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
