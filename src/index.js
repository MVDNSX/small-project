import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store';
import './index.css';
import App from './App';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/HomePage/HomePage';
import Discount from './Pages/Discount/Discount';
import Dashboard from './Pages/Dashboard/Dashboard';
import Notifications from './Pages/Notifications/Notifications';
import Orders from './Pages/Orders/Orders';
import AccountLayout from './Pages/Account/AccountLayout';
import Settings from './Pages/Settings/Settings';
import Logout from './Pages/Logout/Logout';
import Profile from './components/Profile/Profile'
import Form from './components/Form/Form'
import RequireAuth from './components/RequireAuth/RequireAuth'

let auth = false;
const router = createBrowserRouter(createRoutesFromElements
	(
		<Route path='/' element={<App/>} errorElement={<ErrorPage/>}>
			<Route path='home' element={<Home/>}/>
			<Route path='discount' element={<Discount/>}/>
			<Route path='dashboard' element={<Dashboard/>}/>
			<Route path='notifications' element={<Notifications/>}/>
			<Route path='orders' element={<Orders/>}/>
			<Route path='account' element={<AccountLayout/>}>
				<Route path='profile' element={
				<RequireAuth><Profile/></RequireAuth>}/> 
				<Route path='login' element={<Form/>}/> 
			</Route>
			<Route path='settings' element={<Settings/>}/>
			<Route path='logout' element={<Logout/>}/>
		</Route>
	)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);