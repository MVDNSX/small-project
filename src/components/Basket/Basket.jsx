import { useState } from 'react'
import c from './Basket.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import CustomButton from '../UI/CustomButton/CustomButton'
import { SvgIcon } from '../Svg/SvgIcon'


const Basket = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <AnimatePresence >
      <div className={c.basket}>
        <motion.div 
          className={c.btn__wrapper} 
          animate={isOpen ? {opacity: 0} : {opacity:1}}>
            <CustomButton 
              className='btn' 
              onClick={()=>setOpen(true)}>
                <SvgIcon id='basket'/>
            </CustomButton>
        </motion.div>
        <motion.div
          className={c.basket__layout} 
          onClick={()=>setOpen(false)}
          layout
          animate={isOpen ? {width:418} : {width:80}}>
        </motion.div>
      </div>
        
    </AnimatePresence>
   )
}

export default Basket