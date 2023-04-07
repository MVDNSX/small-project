import { addDishes } from '../../store/Slices/basketSlice'
import './btn.css'
import {useDispatch} from 'react-redux'

export const Btn = () => {
	const dispatch = useDispatch()
	return (
	<div className="btn-wrapper">
		<button className='btn' onClick={() => dispatch(addDishes({id:1, name:'govno'}))}>Order now</button>
	</div>
	)
}