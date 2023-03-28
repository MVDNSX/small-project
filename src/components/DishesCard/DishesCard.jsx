import './DishesCard.css'
import dinner from '../../assets/cards/Image 1.png'
import { Btn } from '../Button/Btn'
export const DishesCard = ({name, price, bowls, discount}) => {
	return (
		<div className="card">
				{discount ? <div className="card__discount"><div className="discount">{discount + '% off'}</div></div> : null}
				<div className="card__img">
					<img src={dinner} alt="" />
				</div>
				<div className="card__info">
					<div className="card__name">{name}</div>
					<div className="card__price">{discount !==0 ? <span className='card__discount-price'><s>{(price * (100 + discount) / 100).toFixed(2)}</s>${price}</span> :  `$ ${price}` }</div>
					<div className="card__count">{bowls} Bowls available</div>
				</div>
				<Btn/>
		</div>
	)
}