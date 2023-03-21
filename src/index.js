import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/HomePage/HomePage';
import Discount from './Pages/Discount/Discount';
import Dashboard from './Pages/Dashboard/Dashboard';
import Notifications from './Pages/Notifications/Notifications';
import Orders from './Pages/Orders/Orders';
import Account from './Pages/Account/Account';
import Settings from './Pages/Settings/Settings';
import Logout from './Pages/Logout/Logout';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'discount',
				element: <Discount />
			},
			{
				path: 'dashboard',
				element: <Dashboard />
			},
			{
				path: 'notifications',
				element: <Notifications />
			},
			{
				path: 'orders',
				element: <Orders />
			},
			{
				path: 'account',
				element: <Account />
			},
			{
				path: 'settings',
				element: <Settings />
			},
			{
				path: 'logout',
				element: <Logout />
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RouterProvider router={router} />
);