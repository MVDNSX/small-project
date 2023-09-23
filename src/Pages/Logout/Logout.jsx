import { useDispatch } from 'react-redux'
import CustomButton from '../../components/UI/CustomButton/CustomButton'
import { useGetDishesQuery } from '../../store/dishesAPI'
import { resetUser } from '../../store/Slices/userSlice'
import './Logout.css'

const Logout = () => {
	const dispatch = useDispatch()
	return (
		<div className="logout" style={{padding: 25}}>
			{/*<CustomButton onClick={()=>dispatch(resetUser())}>Logout</CustomButton>*/}

			<nav>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
				</ul>
			</nav>
		</div>
	)
}

export default Logout