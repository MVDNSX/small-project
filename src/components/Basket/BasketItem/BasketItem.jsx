import { SvgIcon } from '../../Svg/SvgIcon'
import CustomButtonNeon from '../../UI/CustomButtonNeon/CustomButtonNeon'
import CustomInput from '../../UI/CustomInput/CustomInput'
import c from './BasketItem.module.css'
import dishImg from '../../../assets/cards/Image 1.png'
import { changeCount, deleteDishes } from '../../../store/Slices/basketSlice'
import {useState } from 'react'
import { useDebounceComment } from '../../../hooks/useDebounceComment'
import { useDispatch } from 'react-redux'
import {motion} from 'framer-motion'
import {useChangeItemCommentMutation, useChangeItemCountMutation, useDeleteItemMutation } from '../../../store/basketApi'

const BasketItem = ({item}) => {
  const [changeItemComment] = useChangeItemCommentMutation()
  const [changeItemCount] = useChangeItemCountMutation()
  const [deleteItem] = useDeleteItemMutation()
  const {name, price, finalPrice, dishId, discount, picture} = item
  const {count, comment, totalCost} = item.BasketItem
  const [comm, setComm] = useState('')
  //const dispatch = useDispatch()
  //useDebounceComment(comm, 1000)

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
          <div className={c.price}>{discount !== 0 && <s className={c.discount}>$ {price}</s>}$ {finalPrice}</div>
        </div>
      </div>
      <div className={c.quantity}>
        <CustomInput 
          value={count}
          min={1}
          onChange={(e) => {changeItemCount({basketId:1, dishId, count: e.target.value})}}
          style={{width: 20, textAlign: 'center', fontWeight: 500}}/></div>
      <div className={c.total__price}>${totalCost}</div>
      <div className={c.commentary}>
        <CustomInput 
          placeholder='Order Note...' 
          value={comment} 
          onChange={(e)=>{changeItemComment({basketId: 1, dishId, comment: e.target.value})}}  
          style={{width: '100%'}}/></div>
      <div className={c.delete}>
        <CustomButtonNeon onClick={()=>{deleteItem(dishId)}}><SvgIcon id='trash'/></CustomButtonNeon></div>
    </motion.div>
  )
}

export default BasketItem