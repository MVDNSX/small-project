import { useSelector } from 'react-redux'
import {BiSearch} from 'react-icons/bi'
import {Outlet, useNavigate} from 'react-router-dom'
import {useEffect, useState } from 'react'
import './AccountLayout.css'


const AccountLayout = (props) => {
	const navigate = useNavigate()
	const auth = useSelector((state) => state.auth.auth)
	useEffect(() => {
      navigate("/account/profile");
  }, [auth]);

	return (
		<div className="account-page">
			<div className="account__header">
					<div className="account__info info">
						<div className="info__name title">User account</div>
						<div className="info__date date">Tuesday, 2 Feb 2021</div>
					</div>

				</div>
				<Outlet/>
		</div>
	)
}

export default AccountLayout