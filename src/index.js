import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import AccountLayout from './Pages/Account/AccountLayout'
import Dashboard from './Pages/Dashboard/Dashboard'
import { DishesPage } from './Pages/DishesPage/DishesPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import { Management } from './Pages/Management/Management'
import Notifications from './Pages/Notifications/Notifications'
import Orders from './Pages/Orders/Orders'
import Settings from './Pages/Settings/Settings'
import Form from './components/Form/Form'
import Profile from './components/Profile/Profile'
import RequireAuth from './components/RequireAuth/RequireAuth'
import { AboutUs } from './components/components-settings/AboutUs/AboutUs'
import './index.css'
import { store } from './store/store'

const router = createBrowserRouter(createRoutesFromElements
	(
		<Route path='/' element={<App/>} errorElement={<ErrorPage/>}>
			<Route path='home' element={<DishesPage/>}/>
			<Route path='discount' element={<DishesPage isDiscount/>}/>
			<Route path='statistics' element={<Dashboard/>}/>
			<Route path='orders' element={<Orders/>}/>
			<Route path='management' element={<Management/>}/>
			<Route path='account' element={<AccountLayout/>}>
				<Route path='profile' element={
				<RequireAuth><Profile/></RequireAuth>}/> 
				<Route path='auth' element={<Form/>}/> 
			</Route>
			<Route path='settings' element={<Settings/>}>
				<Route path='notification' element={<Notifications/>}/>
				<Route path='about' element={<AboutUs/>}/>
			</Route>
		</Route>
	)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);