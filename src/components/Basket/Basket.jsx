import { useState } from 'react'
import c from './Basket.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import CustomButton from '../UI/CustomButton/CustomButton'
import { SvgIcon } from '../Svg/SvgIcon'
import BasketItem from './BasketItem/BasketItem'
import CustomButtonNeon from '../UI/CustomButtonNeon/CustomButtonNeon'


const Basket = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <AnimatePresence >
      {/*<motion.div 
        className={c.basket}
        layout
        animate={isOpen ? {width:400} : {width:80}}>
        <motion.div 
          className={c.btn__wrapper} 
          animate={isOpen ? {opacity: 0} : {opacity:1}}>
            <CustomButton 

              onClick={()=>setOpen(true)}>
                <SvgIcon id='basket'/>
            </CustomButton>
        </motion.div>
        <motion.div
          className={c.basket__layout} >
            <BasketItem/>
            <div className={c.footer__basket}>
              <CustomButtonNeon onClick={()=>setOpen(false)}>Go back</CustomButtonNeon>
              <CustomButton>Continue to Payment</CustomButton>
            </div>
        </motion.div>
      </motion.div>*/}
        
    </AnimatePresence>
   )
}

export default Basket