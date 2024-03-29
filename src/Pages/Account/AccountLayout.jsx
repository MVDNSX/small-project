
import {Outlet, useNavigate, Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import { Layout } from '../../components/Layout/Layout'


const AccountLayout = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/account/profile");
}, []);

	return (
		<Layout>
				<Outlet/>
		</Layout>
	)
}

export default AccountLayout