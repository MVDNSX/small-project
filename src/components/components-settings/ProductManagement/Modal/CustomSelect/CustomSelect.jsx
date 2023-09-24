import { useState } from 'react'
import c from './CustomSelect.module.scss'
import {motion, AnimatePresence} from 'framer-motion'

export const CustomSelect = ( {onChange, selected, options, placeholder}) => {

  let selectedName
  if(selected){
    selectedName = options.find(option => option.id === selected).name
  }


  const variants = {
    hidden:{
      y:50,
      opacity:0
    },
    show:{
      y:0,
      opacity:1
    },
  }
  const [selectItem, setSelectItem] = useState(selectedName)
  const [isOpen, setOpen] = useState(false)

  return ( 
  <div  className={c.wrapper}>
      <div className={c.select} onClick={()=>setOpen(!isOpen)}>
        {selectedName ? selectItem : <span className={c.placeholder}>{placeholder}</span>}
      </div>
      <AnimatePresence>

        {isOpen && <motion.div className={c.options_list} variants={variants} initial={'hidden'} animate={'show'} exit={'hidden'} >
          {options.map(( option )=>{
            return <div 
                    className={c.option} 
                    onClick={()=>{setSelectItem(option.name); onChange(option.id); setOpen(false)}}>
                      {option.name}
                      </div> 
                    })}
        </motion.div>}
      </AnimatePresence>
  </div>

  )
}