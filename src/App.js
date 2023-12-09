import './App.css';
import { Outlet, redirect } from 'react-router-dom'
import { Sidebar } from './components/SideBar/Sidebar';
import { useGetAuthQuery } from './store/authAPI'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
	const {data} = useGetAuthQuery()
	return (
		<div className="App">
			<ToastContainer 
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				/>
			<div className="container">
				<Sidebar />
				<Outlet />
			</div>
		</div>
	);
}

export default App;
