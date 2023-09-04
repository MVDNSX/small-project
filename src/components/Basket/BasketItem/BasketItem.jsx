import { SvgIcon } from '../../Svg/SvgIcon'
import CustomButtonNeon from '../../UI/CustomButtonNeon/CustomButtonNeon'
import CustomInput from '../../UI/CustomInput/CustomInput'
import c from './BasketItem.module.css'
import dishImg from '../../../assets/cards/Image 1.png'
import {motion} from 'framer-motion'
import { useBasketItem} from '../../../hooks/useBasket'
import { useDebounce } from '../../../hooks/useDebounce'
import { useState } from 'react'

const BasketItem = ({item}) => {
  const {dishId, name, discount, price, finalPrice, picture, count, comment, totalCost, handleComment, handleDelete, isLoading} = useBasketItem(item)

  

  return (
    <motion.div 
      className={c.item}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      layout
      >
      <div className={c.data}>
        <div className={c.img}>
          <img src={`http://localhost:5005/${picture}`} alt="foto" />
        </div>
        <div className={c.info}>
          <div className={c.name}>{name}</div>
          {isLoading ? 'обновляем' : 'готово'}
          <div className={c.price}>{discount !== 0 && <s className={c.discount}>$ {price}</s>}$ {finalPrice}</div>
        </div>
      </div>
      <div className={c.quantity}>
        <CustomInput 
          value={count}
          min={1}
          onChange={(e) => {handleCount(e)}}
          style={{width: 20, textAlign: 'center', fontWeight: 500}}/></div>
      <div className={c.total__price}>${totalCost}</div>
      <div className={c.commentary}>
        <CustomInput 
          placeholder='Order Note...' 
          value={comment} 
          onChange={(e)=>{handleComment(e)}}  
          style={{width: '100%'}}/></div>
      <div className={c.delete}>
        <CustomButtonNeon onClick={()=>{handleDelete(dishId)}}><SvgIcon id='trash'/></CustomButtonNeon></div>
    </motion.div>
  )
}

export default BasketItem