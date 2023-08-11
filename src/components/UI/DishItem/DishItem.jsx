import c from './DishItem.module.css'
import dishImage from '../../../assets/cards/Image 1.png'
import CustomButton from '../CustomButton/CustomButton'
import {useDispatch} from 'react-redux'
import { addDishes } from '../../../store/Slices/basketSlice'

const DishItem = ({dish}) => {

  const dispatch = useDispatch();

  const {name, price, finalPrice, bowls, discount} = dish;
  return (
    <div className={c.dish__item}
    initial={{opacity:0}}
      animate={{opacity:1}}
      layout
      exit={{opacity:0}}>
      <div className={c.dish__wrapper}>
        <div className={c.dish__info}>
          {discount !== 0 && <div className={c.discount__bg}><p className={c.discount__value}>{discount}% off</p></div>}
          <div className={c.dish__image}>
            <img src={dishImage} alt="" />
          </div>
          <div className={c.dish__name}>{name}</div>
          <div className={c.dish__price}>{discount !== 0 && <s className={c.dish__price_discount}>$ {price}</s>}$ {finalPrice}</div>
          <div className={c.dish__available}>{bowls} Bowls available</div>
        </div>
        <CustomButton onClick={() => {dispatch(addDishes(dish))}}>Order now</CustomButton>
      </div>
      <div className={c.dish__bg}></div>
    </div>
  )
}

export default DishItem