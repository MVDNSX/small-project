import './App.css';
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/SideBar/Sidebar';

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
