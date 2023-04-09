import './DishesCard.css'
import dinner from '../../assets/cards/Image 1.png'
import {useDispatch} from 'react-redux'
import { addDishes } from '../../store/Slices/basketSlice'
export const DishesCard = ({dishesInfo}) => {
	const {id, name, price, bowls, discount, finalPrice} = dishesInfo
	const dispatch = useDispatch()
	const handleAddBasket = () => {
		dispatch(addDishes({...dishesInfo, count: 1}))
	}

	return (
		<div className="card">
				{discount ? <div className="card__discount"><div className="discount">{discount + '% off'}</div></div> : null}
				<div className="card__img">
					<img src={dinner} alt="" />
				</div>
				<div className="card__info">
					<div className="card__name">{name}</div>
					<div className="card__price">{discount !== 0 ? <span className='card__discount-price'><s>$ {price}</s>$ {finalPrice}</span> :  `$ ${finalPrice}` }</div>
					<div className="card__count">{bowls} Bowls available</div>
				</div>
				<div className="btn-wrapper">
					<button className='card__btn'onClick={handleAddBasket} >Order now</button>
				</div>
		</div>
	)
}