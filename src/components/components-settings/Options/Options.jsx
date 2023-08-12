import c from './Options.module.css'

import OptionsItem from '../../UI/OptionsItem/OptionsItem'
import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

const Options = ( ) => {

  const [isActiveOption, setActiveOption] = useState(1)

  const options = [
    {id:1, name: 'Orders', description: 'Your previous orders', icon: 'security'},
    {id:2, name: 'Notifications', description: 'Customize your notifications', icon: 'notifications'},
    {id:3, name: 'Products Management', description: 'Manage your product, pricing, etc', icon: 'discount'},
    {id:4, name: 'Security', description: 'Configure Password, PIN, etc', icon: 'security'},
    {id:5, name: 'About Us', description: 'Find out more about Posly', icon: 'info'},
  ]

  return (
    <div className={c.options}>
      <AnimatePresence>
        {options.map( item => 
          <OptionsItem 
            key={item.id} 
            item={item} 
            isActive={isActiveOption} 
            setActive={setActiveOption}>
          </OptionsItem>)}
      </AnimatePresence>
    </div>
  )
}

export default Options