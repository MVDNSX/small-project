
import {BiSearch} from 'react-icons/bi'
import {useEffect, useState } from 'react'
import './AccountLayout.css'
import {Outlet, useNavigate, useLocation} from 'react-router-dom'


const AccountLayout = (props) => {
	const [search, setSearch] = useState('')
	const location = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
      navigate("/account/profile");
  }, []);

	return (
		<div className="account-page">
			<div className="account__header">
					<div className="account__info info">
						<div className="info__name title">User account</div>
						<div className="info__date date">Tuesday, 2 Feb 2021</div>
					</div>
					<div className="account__search home__search">
						<BiSearch size='20' color='#fff'/>
						<input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder='Search for food, coffe, etc..' value={search} />
					</div>
				</div>
				<Outlet/>
		</div>
	)
}

export default AccountLayout