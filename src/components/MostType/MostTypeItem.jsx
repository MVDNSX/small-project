import c from './MostTypeItem.module.scss'
import {motion} from 'framer-motion'

export const MostTypeItem = ({stat}) => {

  const variant = {
    show: {scale:1, transition: {delay: 0.1, duration: .3}},
    hidden: {scale:0}
  }



  const typeColor = {
    Pending: '#8785e9',
    Preparing: '#FFB572',
    Delivered: '#50D1AA'
  }
  return (
    <div className={c.item}>
      <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" >
        <motion.circle variants={variant} initial={'hidden'} animate={'show'} cx={9} cy={9} r={9} fill={typeColor[stat.type]}/>
      </svg>
      <div className={c.desc}>
        {stat.type === 'Pending' && 
        <>
          <div className={c.type}>Pending</div>
          <div className={c.count}>{stat.count} orders</div>
        </>
        }
        {stat.type === 'Preparing' && 
        <>
          <div className={c.type}>Preparing</div>
          <div className={c.count}>{stat.count} customers</div>
        </>
        }
        {stat.type === 'Delivered' && 
        <>
          <div className={c.type}>Delivered</div>
          <div className={c.count}>{stat.count} dishes</div>
        </>
        }
        
      </div>
    </div>
  )
}