import PageHeader from '../../components/UI/PageHeader/PageHeader'
import { getDateFormat } from '../../utils/getDate'
import c from './Discount.module.css'


const Discount = () => {
	const date = getDateFormat();
	return (
		<div className={c.discount}>
			<PageHeader header={'Riverside Flamez - Discount sales %'} date={date}/>
		</div>
	)
}

export default Discount