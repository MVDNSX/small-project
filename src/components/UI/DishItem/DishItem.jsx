import c from './DishItem.module.css'
import defaultImgDish from '../../../assets/cards/Image 1.png'
import CustomButton from '../CustomButton/CustomButton'
import {useDispatch} from 'react-redux'
import { addDishes } from '../../../store/Slices/basketSlice'
import { useAddItemBasketMutation } from '../../../store/basketApi'

const DishItem = ({dish}) => {
  const [addBasketItem] = useAddItemBasketMutation()
  
  const {name, price, finalPrice, bowls, discount, picture, dishId} = dish;
  const dishPicture = picture ? `http://localhost:5005/${picture}` : defaultImgDish
  return (
    <div className={c.dish__item}>
      <div className={c.dish__wrapper}>
        <div className={c.dish__info}>
          {discount !== 0 && <div className={c.discount__bg}><p className={c.discount__value}>{discount}% off</p></div>}
          <div className={c.dish__image}>
            <img src={dishPicture} alt="" />
          </div>
          <div className={c.dish__name}>{name}</div>
          <div className={c.dish__price}>{discount !== 0 && <s className={c.dish__price_discount}>$ {price}</s>}$ {finalPrice}</div>
          <div className={c.dish__available}>{bowls} Bowls available</div>
        </div>
        <CustomButton onClick={() => {addBasketItem({basketId:1, dishId})}}>Order now</CustomButton>
      </div>
      <div className={c.dish__bg}></div>
    </div>
  )
}

export default DishItem