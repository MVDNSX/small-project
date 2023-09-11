import './App.css';
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/SideBar/Sidebar';
import { useGetAuthQuery } from './store/authAPI'

function App() {
	const {data} = useGetAuthQuery()
	return (
		<div className="App">
			<div className="container">
				<Sidebar />
				<Outlet />
			</div>
		</div>
	);
}

export default App;
