import { useSelector } from 'react-redux'
import {Outlet, useNavigate, Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import './AccountLayout.css'
import {PageHeader} from '../../components/UI/PageHeader/PageHeader'
import { Layout } from '../../components/Layout/Layout'


const AccountLayout = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/account/profile");
}, []);

	return (
		<Layout>
				<PageHeader
					header={'User account'}
					isDate
					isBorder/>
				<Outlet/>
		</Layout>
	)
}

export default AccountLayout