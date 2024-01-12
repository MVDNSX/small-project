import c from './DishItem.module.scss'
import defaultImgDish from '../../../assets/cards/Image 1.png'
import {CustomButton} from '../CustomButton/CustomButton'
import { useAddItemBasketMutation } from '../../../store/basketApi'
import { urlHostingImage } from '../../../utils/getBaseUrlHosting'

const DishItem = ({dish, selectedId, setSelectedId}) => {
  const [addBasketItem] = useAddItemBasketMutation()
  const {name, price, finalPrice, bowls, discount, picture, productId} = dish;
  const dishPicture = picture ? `${urlHostingImage}/${picture}` : defaultImgDish
  return (
    <>
      <div className={c.dish__item} onClick={()=>setSelectedId(productId)}>
        <div className={c.dish__wrapper}>
          <div className={c.dish__info}>
            {discount !== 0 && <div className={c.discount__bg}><p className={c.discount__value}>{discount}% off</p></div>}
            <div className={c.dish__image}>
              <img src={dishPicture} alt="" />
            </div>
            <div className={c.dish__description}>
              <div className={c.dish__name}>{name}</div>
              <div className={c.dish__price}>{discount !== 0 && <s className={c.dish__price_discount}>$ {price}</s>}$ {finalPrice}</div>
              <div className={c.dish__available}>{bowls} Bowls available</div>
            </div>
          </div>
          <CustomButton text={'Order now'} onClick={() => {addBasketItem(productId)}}/>
        </div>
        <div className={c.dish__bg}></div>
      </div>
    </>
  )
}

export default DishItem