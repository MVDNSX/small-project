import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import c from './SelectOptions.module.css'

const SelectOptions = ({handlerClick, options, isVisible}) => {

  const [isHovered, setHovered] = useState(0);

  return (
    <AnimatePresence>
      {isVisible && 
      <motion.div 
      className={c.sort__menu}
      initial={{y: '20px', opacity: 0}} 
			animate={{y: 0, opacity:1}} 
			exit={{y: '20px', opacity: 0}}
      >
        {options.map((option, index) => 
        <div 
          className={c.sort__item}
          key={option.value} 
          data-value={option.value}
          onClick={() => handlerClick(option)}
          onMouseEnter={() => setHovered(index)}
          >{option.name}
            {isHovered === index
            ? <motion.div 
            layoutId='hoverLayout' 
            className={c.drop__hover}></motion.div>
            : null}
          </div>)}
      </motion.div>
      }
    </AnimatePresence>
  )
}

export default SelectOptions