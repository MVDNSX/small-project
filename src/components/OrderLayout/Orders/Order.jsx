import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import CustomButton from '../../UI/CustomButton/CustomButton'
import CustomButtonNeon from '../../UI/CustomButtonNeon/CustomButtonNeon'
import OrderItem from '../../UI/OrderItem/OrderItem'
import c from './Order.module.scss'

const Order = () => {
  const [isOpen, setOpen] = useState(false)
  let [large, {height}] = useMeasure()
  const preparing = true;
	const complete = true;
	const pending = true;

	const item = {
		"dishesId": 20,
		"categoryId": 3,
		"name": "Spicy seasoned seafood noodles",
		"price": 2.39,
		"bowls": 21,
		"discount": 0,
		"finalPrice": 2.39
	 }

  return (
    <MotionConfig transition={{duration: 0.5}}>
      <motion.div className={c.order} animate={isOpen ? {height: 48 + height} : {height:50}}>
				<div className={c.small} onClick={()=>{setOpen(!isOpen)}}>
					<div className={c.number}>Orders #34562</div>
					<div className={c.menu}>Spicy seasoned seafood noodles </div>
					<div className={c.payment}>$20.56</div>
					{preparing && <div className={c.status +' ' + c.preparing}>Preparing</div>}
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
              <OrderItem item={item}/>
              <OrderItem item={item}/>
              <OrderItem item={item}/>
              <OrderItem item={item}/>
              <OrderItem item={item}/>
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