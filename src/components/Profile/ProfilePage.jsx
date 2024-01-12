import c from './ProfilePage.module.scss'
import { User } from '../User/User'
import { Orders } from '../Orders/Orders'
import { PageHeader } from '../UI/PageHeader/PageHeader'
import { CustomButton } from '../UI/CustomButton/CustomButton'
import { resetUser } from '../../store/Slices/userSlice'
import { useDispatch } from 'react-redux'

export const ProfilePage = () => {
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(resetUser())
	}
	return (
		<div className={c.profile}>
			<PageHeader
					header={'User account'}
					isDate
					isBorder>
						<CustomButton text='Logout' icon={'logout'} neon onClick={logoutHandler}/>
			</PageHeader>
			<div className={c.dataContainer}>
				<User/>
				{/*<MostOrdered/>*/}
			</div>
			<div className={c.historyContainer}>

				<Orders/>
			</div>
		</div>
	)
} 
