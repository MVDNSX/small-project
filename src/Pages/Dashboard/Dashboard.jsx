import OrderLayout from '../../components/OrderLayout/OrderLayout'
import PageHeader from '../../components/UI/PageHeader/PageHeader'
import SummaryCard from '../../components/UI/SummaryCard/SummaryCard'
import c from './DashboardLayout.module.scss'

const Dashboard = () => {
	return (
		<div className={c.layout}>
			<div className={c.left}>
				<PageHeader 
					header={'Dashboard'}
					isDate
					isBorder/>
				<div className={c.stat}>
					<SummaryCard stat={true} icon={'dollar'} body={'Total Revenue'} changes={'+32.40%'} value={'$10,243.00'}/>
					<SummaryCard stat={false} icon={'orders'} body={'Total Dish Ordered'} changes={'-12.40%'} value={'23,456'}/>
					<SummaryCard stat={true} icon={'account'} body={'Total Customer'} changes={'+2.40%'} value={'1,234'}/>
				</div>
				<OrderLayout/>
			</div>
			<div className="right">123</div>
		</div>
	)
}

export default Dashboard