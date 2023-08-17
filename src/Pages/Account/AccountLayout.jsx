import { useSelector } from 'react-redux'
import {Outlet, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import './AccountLayout.css'
import PageHeader from '../../components/UI/PageHeader/PageHeader'


const AccountLayout = (props) => {
	const navigate = useNavigate()
	const auth = useSelector((state) => state.auth.auth)
	useEffect(() => {
      navigate("/account/profile");
  }, [auth]);

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