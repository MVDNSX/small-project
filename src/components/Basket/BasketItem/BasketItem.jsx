import {memo} from 'react'
import { SvgIcon } from '../../Svg/SvgIcon'
import {CustomButton} from '../../UI/CustomButton/CustomButton'
import {CustomInput} from '../../UI/CustomInput/CustomInput'
import c from './BasketItem.module.css'
import {motion} from 'framer-motion'
import { useBasketItem } from '../../../hooks/useBasket'
import { urlHostingImage } from '../../../utils/getBaseUrlHosting'

export const BasketItem = memo(({item}) => {
  const {name, price, finalPrice, discount, picture, count, totalCostProduct, localComment, setLocalComment, handleCommentQuery, handleCount, handleDelete} = useBasketItem(item)
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
          <img src={`${urlHostingImage}/${picture}`} alt="foto" />
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
          onChange={(e) => {handleCount(e)}}
          style={{width: 20, textAlign: 'center', fontWeight: 500}}/>
      </div>

      <div className={c.total__price}>${totalCostProduct}</div>

      <div className={c.commentary}>
        <CustomInput 
          placeholder='Order Note...' 
          value={localComment} 
          onChange={(e)=>{setLocalComment(e.target.value)}} 
          onBlur={handleCommentQuery} 
          style={{width: '100%'}}/>
      </div>

      <div className={c.delete}>
        <CustomButton neon onClick={handleDelete} icon='trash'/>
      </div>

    </motion.div>
  )
})