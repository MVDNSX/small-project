import { SvgIcon } from '../../Svg/SvgIcon'
import c from './OptionsItem.module.scss'
import {motion} from 'framer-motion'

const OptionsItem = ({item, isActive, setActive, children}) => {
  const {icon, name, description, id} = item
  return (
    <>
      <motion.div 
        className={isActive === id ? c.item_bg +' '+ c.active : c.item_bg }
        onClick={()=>{setActive(id)}}>
        <div className={c.icon}>
          <SvgIcon id={icon}/>
        </div>
        <div className={c.name}>{name}</div>
        <div className={c.description}>{description}</div>
        {isActive === id && <motion.div className={c.layout} layoutId='activeOprions'></motion.div>}
      </motion.div>
    </>
  )
}

export default OptionsItem