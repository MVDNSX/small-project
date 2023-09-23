import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import {CustomButton} from '../../UI/CustomButton/CustomButton'
import {CustomButtonNeon} from '../../UI/CustomButtonNeon/CustomButtonNeon'
import {OrderItem} from '../../UI/OrderItem/OrderItem'
import c from './Order.module.scss'

const Order = ({order}) => {
  const {orderNumber, result, status, menu} = order;
  const [isOpen, setOpen] = useState(false)
  let [large, {height}] = useMeasure()

  return (
    <MotionConfig transition={{duration: 0.5}}>
      <motion.div className={c.order} animate={isOpen ? {height: 48 + height} : {height:50}}>
				<div className={c.small} onClick={()=>{setOpen(!isOpen)}}>
					<div className={c.number}>Orders #{orderNumber}</div>
					<div className={c.menu}>Spicy seasoned seafood noodles </div>
					<div className={c.payment}>${result}</div>
					{status === 'Completed' && <div className={c.status +' ' + c.completed}>Completed</div>}
					{status === 'Preparing' && <div className={c.status +' ' + c.preparing}>Preparing</div>}
					{status === 'Pending' && <div className={c.status +' ' + c.pending}>Pending</div>}
				</div>

        <AnimatePresence>
				  {isOpen && 
          <motion.div 
          ref={large}
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className={c.large}>
            <div className={c.title}>The menu</div>
            <div className={c.list}>
              {menu.map( item =>  <OrderItem key={item.dishesId} item={item}/>)}
            </div>
            <div className={c.controls}>
              <CustomButtonNeon children={'Close'} onClick={()=>setOpen(false)}/>
              <CustomButton children={'Track Order'}/>
            </div>
          </motion.div>}
        </AnimatePresence>

			</motion.div>
    </MotionConfig>
  )
}

export default Order