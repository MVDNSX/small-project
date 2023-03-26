import './CardDish.css'
import dinner from '../../assets/cards/Image 1.png'
import { Btn } from '../Button/Btn'
export const CardDish = () => {
	return (
		<div className="card">
				<div className="card__img">
					<img src={dinner} alt="" />
				</div>
				<div className="card__info">
					<div className="card__name">Spicy seasoned seafood noodles</div>
					<div className="card__price">$ 2.29</div>
					<div className="card__count">20 Bowls available</div>
				</div>
				<Btn/>
		</div>
	)
}