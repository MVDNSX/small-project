import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import HomePage from './Pages/HomePage/HomePage';
import Tasks from './Pages/Tasks/Tasks';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'home',
				element: <HomePage />,
			},
			{
				path: 'tasks',
				element: <Tasks />
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RouterProvider router={router} />
);