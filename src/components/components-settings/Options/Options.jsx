import c from './Options.module.css'

import OptionsItem from '../../UI/OptionsItem/OptionsItem'
import { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'


const Options = ( ) => {
  const [isActiveOption, setActiveOption] = useState(1)

  const options = [
    {id:1, name: 'Orders', location:'orders', description: 'Your previous orders', icon: 'security'},
    {id:2, name: 'Notifications', location:'notification', description: 'Customize your notifications', icon: 'notifications'},
    {id:3, name: 'Products Management', location:'management', description: 'Manage your product, pricing, etc', icon: 'discount'},
    {id:4, name: 'Security', location:'security', description: 'Configure Password, PIN, etc', icon: 'security'},
    {id:5, name: 'About Us', location:'about', description: 'Find out more about Posly', icon: 'info'},
  ]

  return (
    <div className={c.options}>
      <AnimatePresence>
        {options.map( item => 
          <OptionsItem 
            key={item.id} 
            item={item} 
            isActive={isActiveOption} 
            setActive={setActiveOption}/>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default Options