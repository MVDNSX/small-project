import { useState } from 'react'
import { SvgIcon } from '../../Svg/SvgIcon'
import c from './NewDish.module.scss'

export const NewDish = ({openModal}) => {
  return (
    <>
      <div className={c.adding} onClick={()=>(openModal(true))}>
        <SvgIcon id='plus'/>
        <div>Add new dish</div>
      </div>
    </>
  )
}