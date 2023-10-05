import Orders from '../../components/Orders/Order/Order'
import PageHeader from '../../components/UI/PageHeader/PageHeader'
import c from './Notifications.module.scss'

const Notifications = () => {

	return (
		<div className={c.notifications}>
			<PageHeader header={'Notifications'} isDate={true} isBorder={true}/>
			<Orders/>
		</div>

	)
}

export default Notifications