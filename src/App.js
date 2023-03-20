import './App.css';
import { Outlet } from 'react-router-dom'
import AsideBar from './components/Navbar/AsideBar';

function App() {


	return (
		<div className="App">
			<div className="container">
				<AsideBar />
			</div>
			{/* 
			<div id="detail">
				<Outlet />
			</div> */}
		</div>
	);
}

export default App;
