import './DishesCard.css'
import dinner from '../../assets/cards/Image 1.png'
import { Btn } from '../Button/Btn'
export const DishesCard = ({name, price, bowls, discount}) => {
	return (
		<div className="card">
				<div className="card__img">
					<img src={dinner} alt="" />
				</div>
				<div className="card__info">
					<div className="card__name">{name}</div>
					<div className="card__price">{`$ ${price}`}</div>
					<div className="card__count">{bowls} Bowls available</div>
				</div>
				<Btn/>
		</div>
	)
}