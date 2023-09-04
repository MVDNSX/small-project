import {useState} from 'react'
import c from './Basket.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import BasketItem from './BasketItem/BasketItem'
import CustomButtonNeon from '../UI/CustomButtonNeon/CustomButtonNeon'
import CustomButton from '../UI/CustomButton/CustomButton'
import Total from './Total/Total'
import BasketHeader from './BasketHeader/BasketHeader'
import { useSelector } from 'react-redux'
import { useGetBasketQuery } from '../../store/basketApi'
import { useBasket } from '../../hooks/useBasket'

const Basket = () => {
  const {isOpen, setOpen, basketItems, totalDiscount, totalCostBasket, handleOpen, handleClose} = useBasket();

  return (
    <AnimatePresence>
      <motion.div initial={false} animate={isOpen ? {width: 410} : { width: 80}} className={c.basket_container}>

      <motion.div 
        className={c.open} 
        animate={isOpen ? {opacity: 0, pointerEvents: 'none'}: {opacity: 1}}>
          <CustomButton onClick={handleOpen} id='basket'/>
      </motion.div>
      
      <AnimatePresence>
      {isOpen && 
        <motion.div 
          className={c.basket}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}>
          
          <BasketHeader/>

          <div className={c.content}>
            <AnimatePresence>
              {basketItems.map( (item, index) => <BasketItem key={item.dishId} item={item} index={index}/>)}
            </AnimatePresence>
          </div>

          <Total orderPrice={totalCostBasket} orderDiscount={totalDiscount}/>
        
          <div className={c.controls}>
            <CustomButtonNeon children={'Go Back'} onClick={handleClose}/>
            <CustomButton children={'Continue to Payment'}/>
          </div>

       </motion.div>}
      </AnimatePresence>
      
      </motion.div>
    </AnimatePresence>
   )
}

export default Basket