import { useState } from 'react'
import { useChangeItemCommentMutation, useChangeItemCountMutation, useDeleteItemMutation } from '../../../store/basketApi'
import { SvgIcon } from '../../Svg/SvgIcon'
import CustomButtonNeon from '../../UI/CustomButtonNeon/CustomButtonNeon'
import CustomInput from '../../UI/CustomInput/CustomInput'
import c from './BasketItem.module.css'
//import dishImg from '../../../assets/cards/Image 1.png'
import {motion} from 'framer-motion'

const BasketItem = ({item}) => {
  const {name, price, finalPrice, productId, discount, picture} = item
  const {count, comment, totalCost} = item.product_basket
  const [deleteItem] = useDeleteItemMutation()
  const [changeItemCount] = useChangeItemCountMutation()
  const [changeItemComment] = useChangeItemCommentMutation()
  const [localComment, setLocalComment] = useState(comment);
  const handleCommentQuery = () =>{
    if(comment === localComment){
      return
    }
    changeItemComment({productId, comment: localComment})
  }
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
          onChange={(e) => {changeItemCount({productId, count: +e.target.value})}}
          style={{width: 20, textAlign: 'center', fontWeight: 500}}/>
      </div>

      <div className={c.total__price}>${totalCost}</div>

      <div className={c.commentary}>
        <CustomInput 
          placeholder='Order Note...' 
          value={localComment} 
          onChange={(e)=>{setLocalComment(e.target.value)}} 
          onBlur={handleCommentQuery} 
          style={{width: '100%'}}/>
      </div>

      <div className={c.delete}>
        <CustomButtonNeon onClick={()=>{deleteItem(productId)}}><SvgIcon id='trash'/></CustomButtonNeon>
      </div>

    </motion.div>
  )
}

export default BasketItem