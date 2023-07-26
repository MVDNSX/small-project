import c from './DishItem.module.css'
import dishImage from '../../../assets/cards/Image 1.png'

const DishItem = ({dish}) => {
  const {name, price, bowls} = dish;
  return (
    <div className={c.dish__item}>
      <div className={c.dish__wrapper}>
        <div className={c.dish__info}>
          <div className={c.dish__image}>
            <img src={dishImage} alt="" />
          </div>
          <div className={c.dish__name}>{name}</div>
          <div className={c.dish__price}>$ {price}</div>
          <div className={c.dish__available}>{bowls} Bowls available</div>
        </div>
        <button className={c.button__order}>Order now</button>
      </div>
      <div className={c.dish__bg}></div>
    </div>
    
  )
}

export default DishItem