import { useState } from 'react'
import { SvgIcon } from '../../../Svg/SvgIcon'
import c from './NewDish.module.scss'

export const NewDish = ({handleOpen}) => {
  return (
    <>
      <div className={c.adding} onClick={() => {handleOpen(true)}}>
        <SvgIcon icon='plus'/>
        <div>Add new dish</div>
      </div>
    </>
  )
}