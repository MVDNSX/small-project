import './Profile.css'
const Profile = () => {
	return (
		<div className="profile-container">
			<div className="user-info">Lorem ipsum dolor sit amet.</div>
			<div className="most-order">Lorem ipsum dolor sit amet.</div>
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