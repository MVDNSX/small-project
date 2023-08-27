import { useDispatch } from 'react-redux'
import CustomButton from '../../components/UI/CustomButton/CustomButton'
import { useGetDishesQuery } from '../../store/dishesAPI'
import { resetUser } from '../../store/Slices/userSlice'

const Logout = () => {
	const dispatch = useDispatch()
	return (
		<div className="logout" style={{padding: 25}}>
			<CustomButton onClick={()=>dispatch(resetUser())}>Logout</CustomButton>
		</div>
	)
}

export default Logout