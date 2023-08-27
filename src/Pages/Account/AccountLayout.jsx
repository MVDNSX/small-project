import { useSelector } from 'react-redux'
import {Outlet, useNavigate, Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import './AccountLayout.css'
import PageHeader from '../../components/UI/PageHeader/PageHeader'


const AccountLayout = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/account/profile");
}, []);

	return (
		<div className="account-page">
				<PageHeader
					header={'User account'}
					isDate
					isBorder/>
				<Outlet/>
		</div>
	)
}

export default AccountLayout