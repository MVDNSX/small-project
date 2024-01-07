import { SvgIcon } from '../../Svg/SvgIcon'
import c from './OptionsItem.module.scss'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'

const OptionsItem = ({item, isActive, setActive, children}) => {
  const {icon, name, description, id, location} = item
  const navigate = useNavigate()
  const handleActive = () => {
    setActive(id)
    navigate(`${location}`)
  }
  return (
    <>
      <motion.div 
        className={isActive === id ? c.item_bg +' '+ c.active : c.item_bg }
        onClick={handleActive}>
        <div className={c.icon}>
          <SvgIcon icon={icon}/>
        </div>
        <div className={c.name}>{name}</div>
        <div className={c.description}>{description}</div>
        {isActive === id && <motion.div className={c.layout} layoutId='activeOptions'></motion.div>}
      </motion.div>
    </>
  )
}

export default OptionsItem