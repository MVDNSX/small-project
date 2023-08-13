import OrderLayout from '../../components/OrderLayout/OrderLayout'
import Order from '../../components/OrderLayout/Orders/Order'
import PageHeader from '../../components/UI/PageHeader/PageHeader'
import c from './Notifications.module.scss'

const Notifications = () => {

	return (
		<div className={c.notifications}>
			<PageHeader header={'Notifications'} isDate={true} isBorder={true}/>
			<OrderLayout/>
		</div>

	)
}

export default Notifications