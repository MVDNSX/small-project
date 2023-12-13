import c from './ProfilePage.module.scss'
import { User } from '../User/User'
import { MostOrdered } from '../MostOrdered/MostOrdered'
import { Orders } from '../Orders/Orders'
import { PageHeader } from '../UI/PageHeader/PageHeader'

export const ProfilePage = () => {

	return (
		<div className={c.profile}>
			<PageHeader
					header={'User account'}
					isDate
					isBorder/>
			<div className={c.dataContainer}>
				<User/>
				<MostOrdered/>
			</div>
			<div className={c.historyContainer}>

				<Orders/>
			</div>
		</div>
	)
} 
