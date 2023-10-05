import c from './MostType.module.scss'
import './MostType.module.scss'
import BlockHeader from '../UI/BlockHeader/BlockHeader'
import { CustomSelect } from '../UI/CustomSelect/CustomSelect'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

export const MostType = () => {

  const options = [
		{value: 1, name:'Today'},
    {value: 2, name:'Week'},
    {value: 3, name:'Month'},
	]
  const [typeOrder, setTypeOrder] = useState(options[0])

  const variant = {
    show: {scale:1, transition: {delay: 0.1, duration: .3}},
    hidden: {scale:0}
  }
  
  return (
    <div className={c.layout}>
      <BlockHeader header={'Most Type of Order'} Border>
						<CustomSelect options={options} value={typeOrder.name} onChange={setTypeOrder}/>
			</BlockHeader>

      <div className={c.content}>
        <AnimatePresence transition={{duration: 1}}>
          <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" >
          <circle cx={100} cy={100} r={64} fill='none' stroke='#292836' strokeWidth={10.5}/>
          <circle cx={100} cy={100} r={74} fill='none' stroke='#353440' strokeWidth={10.5}/>
          <circle cx={100} cy={100} r={84} fill='none' stroke='#292836' strokeWidth={10.5}/>
          <circle cx={100} cy={100} r={94} fill='none' stroke='#353440' strokeWidth={10.5}/>

          <motion.circle initial={{strokeDashoffset:465}} animate={{strokeDashoffset:465 - 465/100 * 58}} 
          transition={{delay: 0.1}}
          cx={100} cy={100} r={74} fill='none' stroke='#8785E9' strokeWidth={10.5} strokeLinecap='round' strokeDasharray={465} transform='rotate(-90, 100, 100)'/>

          <motion.circle initial={{strokeDashoffset:528}} animate={{strokeDashoffset:528 - 528/100 * 50}}
          transition={{delay: 0.1}}
           cx={100} cy={100} r={84} fill='none' stroke='#FFB572' strokeWidth={10.5} strokeLinecap='round' strokeDasharray={528} transform='rotate(-90, 100, 100)'/>

          <motion.circle initial={{strokeDashoffset:591}} animate={{strokeDashoffset:591 - 591/100 * 75}}
          transition={{delay: 0.1}}
           cx={100} cy={100} r={94} fill='none' stroke='#50D1AA' strokeWidth={10.5} strokeLinecap='round' strokeDasharray={591} transform='rotate(-90, 100, 100)'/>
          </svg>
        </AnimatePresence>

        <div className={c.info}>
          <div className={c.item}>
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" >
            <motion.circle variants={variant} initial={'hidden'} animate={'show'} cx={9} cy={9} r={9} fill='#8785e9'/>
          </svg>
            <div className={c.desc}>
              <div className={c.type}>Pending</div>
              <div className={c.count}>200 orders</div>
            </div>
          </div>

          <div className={c.item}>
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" >
            <motion.circle variants={variant} initial={'hidden'} animate={'show'} cx={9} cy={9} r={9} fill='#FFB572'/>
          </svg>
            <div className={c.desc}>
              <div className={c.type}>Preparing</div>
              <div className={c.count}>122 customers</div>
            </div>
          </div>

          <div className={c.item}>
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" >
            <motion.circle variants={variant} initial={'hidden'} animate={'show'} cx={9} cy={9} r={9} fill='#50D1AA'/>
          </svg>
            <div className={c.desc}>
              <div className={c.type}>Delivered</div>
              <div className={c.count}>264 dishes</div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}