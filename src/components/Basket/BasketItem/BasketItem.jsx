import { SvgIcon } from '../../Svg/SvgIcon'
import CustomButtonNeon from '../../UI/CustomButtonNeon/CustomButtonNeon'
import CustomInput from '../../UI/CustomInput/CustomInput'
import c from './BasketItem.module.css'
import dishImg from '../../../assets/cards/Image 1.png'
import { useDispatch } from 'react-redux'
import { changeComment, deleteDishes } from '../../../store/Slices/basketSlice'
import { useEffect, useRef, useState } from 'react'
import { useDebounce } from '../../../hooks/useDebounceComment'

const BasketItem = ({item, index}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('')
  const {name, price, dishesId} = item
  
  useEffect(()=>{
    let timer = setTimeout(() => {
      useDispatch(changeComment({comment, index}))
    }, 1000);

    return () => {
      clearTimeout(timer)
    }
  }, [comment])
  

  return (
    <div className={c.item}>
      <div className={c.data}>
        <div className={c.img}>
          <img src={dishImg} alt="foto" />
        </div>
        <div className={c.info}>
          <div className={c.name}>{name}</div>
          <div className={c.price}>$ {price}</div>
        </div>
      </div>
      <div className={c.quantity}><CustomInput placeholder={0} style={{width: 20, textAlign: 'center'}}/></div>
      <div className={c.total__price}>$ 5.32</div>
      <div className={c.commentary}>
        <CustomInput 
          placeholder='Order Note...' 
          value={comment} 
          onChange={(e)=>{setComment(e.target.value)}}  
          style={{width: '100%'}}/></div>
      <div className={c.delete}>
        <CustomButtonNeon 
          onClick={() => dispatch(deleteDishes(dishesId))}><SvgIcon id='trash'/></CustomButtonNeon></div>
    </div>
  )
}

export default BasketItem