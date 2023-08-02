import { useState, useRef } from 'react'
import c from './Basket.module.css'
import {motion, AnimatePresence, useMotionValueEvent, useMotionValue} from 'framer-motion'
import BasketItem from './BasketItem/BasketItem'
import CustomButtonNeon from '../UI/CustomButtonNeon/CustomButtonNeon'
import CustomButton from '../UI/CustomButton/CustomButton'



const Basket = () => {
  const [isOpen, setOpen] = useState(false)

  const handlerBack = (event) => {
    event.stopPropagation();
    setOpen(false);
  }

  return (
    <AnimatePresence>
      <motion.div initial={false} animate={isOpen ? {width: 410} : { width: 80}} className={c.basket_container}>
      <motion.div 
        className={c.open} 
        animate={isOpen ? {opacity: 0}: {opacity: 1}}>
          <CustomButton onClick={()=>{setOpen(true)}} id='basket'/>
      </motion.div>
      <motion.div 
        className={c.basket}
        initial={false}
        animate={isOpen ? {opacity: 1} : {opacity: 0}}>
        <div className={c.header}>
          <div className={c.order_number}>Orders #34562</div>
          <div className={c.columns}>
            <div className={c.column_header}>Item</div>
            <div>Qty</div>
            <div>Price</div>
          </div>
        </div>
        <div className={c.content}>
          <BasketItem/>
          <BasketItem/>
          <BasketItem/>
          <BasketItem/>
          <BasketItem/>
          <BasketItem/>
          <BasketItem/>
        </div>
        <div className={c.total}>
          <div className={c.total__item}>
            Discount
            <span>$ 0</span>
          </div>
          <div className={c.total__item}>
            Sub total
            <span>$ 21.3</span>
          </div>
        </div>
        <div className={c.controls}>
          <CustomButtonNeon children={'Go Back'} onClick={handlerBack}/>
          <CustomButton children={'Continue to Payment'}/>
        </div>

       </motion.div>
      </motion.div>
    </AnimatePresence>
   )
}

export default Basket