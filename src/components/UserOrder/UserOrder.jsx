import './UserOrder.css'
const UserOrder = ({dishesInfo}) => {
  console.log(dishesInfo)
  const {orderId, dishes, totalPayment, status} = dishesInfo
  return (
    <div className="order-report__row">
		  <div className="column__customer">Orders #{orderId}</div>
			<div className="column__menu">{dishes}</div>
			<div className="column__payment">${totalPayment}</div>
			<div className="column__status">
        {status === 1 
        ? <div className="status-bg bg-green">Completed</div>
        :<div className="status-bg bg-orange">Preparing</div>
        }
		  </div>
		</div>
  )
}

export default UserOrder