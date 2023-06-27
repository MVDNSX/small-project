import { useState } from 'react'
import avatar from '../../assets/avatar/user-avatar.png'
import './Profile.css'
const Profile = () => {
	const [userName, setUserName] = useState('Eren yeager');
	const [userEmail, setUserEmail] = useState('Eren101@gmail.com')
	return (
		<div className="profile-container">

			<div className="user-profile">

				<div className="user-data">

					<div className="user-data__avatar"><img src={avatar} alt="" /></div>

					<div className="user-data__info">
						<div className="user-data__name">Eren Yeager</div>
						<div className="user-data__creation">Member since 12 mars 2023</div>
					</div>

				</div>

				<form className="user-data__form">
					<label htmlFor="udn" className='user-data__label' >Name</label>
					<input id='udn' type="text" className='user-data__input' 
					value={userName}/>
					<label htmlFor="ude" className='user-data__label' >Email</label>
					<input id='ude' type="text" className='user-data__input' 
					value={userEmail}/>
				</form>

			</div>

			<div className="most-order">

				<div className="most-order__title">Most Ordered</div>

			</div>


			<div className="order-report">
				<div className="order-report__header">
					<div className="order-report__title">Eren Yeager’s orders</div>
					<div className="order-report__heading">
						<div>Customer</div>
						<div>Menu</div>
						<div>Total Payment</div>
						<div>Status</div>
					</div>
				</div>
				
				<div className="order-report__row-wrapper">

					<div className="order-report__row">
						<div className="column__customer">Orders #34562</div>
						<div className="column__menu">Spicy seasoned seafood noodles </div>
						<div className="column__payment">$20.56</div>
						<div className="column__status">
							<div className="status-bg bg-orange">Preparing</div>
						</div>
					</div>

					<div className="order-report__row">
						<div className="column__customer">Orders #34562</div>
						<div className="column__menu">Spicy seasoned seafood noodles </div>
						<div className="column__payment">$20.56</div>
						<div className="column__status">
							<div className="status-bg bg-green">Completed</div>
						</div>
					</div>

					<div className="order-report__row">
						<div className="column__customer">Orders #34562</div>
						<div className="column__menu">Spicy seasoned seafood noodles </div>
						<div className="column__payment">$20.56</div>
						<div className="column__status">
							<div className="status-bg bg-green">Completed</div>
						</div>
					</div>

					<div className="order-report__row">
						<div className="column__customer">Orders #34562</div>
						<div className="column__menu">Spicy seasoned seafood noodles </div>
						<div className="column__payment">$20.56</div>
						<div className="column__status">
							<div className="status-bg bg-green">Completed</div>
						</div>
					</div>

					<div className="order-report__row">
						<div className="column__customer">Orders #34562</div>
						<div className="column__menu">Spicy seasoned seafood noodles </div>
						<div className="column__payment">$20.56</div>
						<div className="column__status">
							<div className="status-bg bg-green">Completed</div>
						</div>
					</div>
					

				</div>

				
				
			</div>
		</div>
	)
} 

export default Profile