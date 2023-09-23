import c from './OrderItem.module.scss'
import dishImg from '../../../assets/cards/Image 1.png'
import { useDispatch } from 'react-redux'
import {motion} from 'framer-motion'

export const OrderItem = ({item, index}) => {
  const {name, price, finalPrice, count, countPrice, discount} = item
  const dispatch = useDispatch()
const commentary = true;


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
          <img src={dishImg} alt="foto" />
        </div>
        <div className={c.info}>
          <div className={c.name}>{name}</div>
          <div className={c.price}>{discount !== 0 && <s className={c.discount}>$ {price}</s>}$ {finalPrice}</div>
        </div>
      </div>
      <div className={c.quantity}>{1}</div>
      <div className={c.total__price}>$ {2.39}</div>
      <div className={c.commentary}>
        {commentary ? 'Commentary' : <span>Order Note...</span>}
      </div>
    </motion.div>
  )
}
