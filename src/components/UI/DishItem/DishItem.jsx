import c from './DishItem.module.css'
import dish from '../../../assets/cards/Image 1.png'

const DishItem = () => {
  return (
    <div className={c.dish__item}>
      <div className={c.dish__wrapper}>
        <div className={c.dish__info}>
          <div className={c.dish__image}>
            <img src={dish} alt="" />
          </div>
          <div className={c.dish__name}>Spicy seasoned seafood noodles</div>
          <div className={c.dish__price}>$ 2.29</div>
          <div className={c.dish__available}>20 Bowls available</div>
        </div>
        <button className={c.button__order}>Order now</button>
      </div>
      <div className={c.dish__bg}></div>
    </div>
    
  )
}

export default DishItem