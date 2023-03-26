import './App.css';
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/SideBar/Sidebar';
import { CardDish } from './components/CardDish/CardDish';
import Home from './Pages/HomePage/HomePage';

function App() {


	return (
		<div className="App">
			<div className="container">
				<Sidebar />
				<div id="detail" className='children'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default App;
