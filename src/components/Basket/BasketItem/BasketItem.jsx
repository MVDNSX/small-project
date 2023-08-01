import { SvgIcon } from '../../Svg/SvgIcon'
import CustomButtonNeon from '../../UI/CustomButtonNeon/CustomButtonNeon'
import CustomInput from '../../UI/CustomInput/CustomInput'
import c from './BasketItem.module.css'
import dishImg from '../../../assets/cards/Image 1.png'

const BasketItem = () => {
  return (
    <div className={c.item}>
      <div className={c.data}>
        <div className={c.img}>
          <img src={dishImg} alt="foto" />
        </div>
        <div className={c.info}>
          <div className={c.name}>Spicy seasoned sea...</div>
          <div className={c.price}>$ 2.29</div>
        </div>
      </div>
      <div className={c.quantity}><CustomInput placeholder={0} style={{width: 20, textAlign: 'center'}}/></div>
      <div className={c.total__price}>$ 5.32</div>
      <div className={c.commentary}><CustomInput placeholder='Order Note...' style={{width: '100%'}}/></div>
      <div className={c.delete}><CustomButtonNeon><SvgIcon id='trash'/></CustomButtonNeon></div>
    </div>
  )
}

export default BasketItem