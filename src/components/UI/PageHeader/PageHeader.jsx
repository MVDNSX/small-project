import { getDateFormat } from '../../../utils/getDate'
import c from './PageHeader.module.css'

export const PageHeader = ({header, children, isDate, isBorder}) => {
  const date = getDateFormat()
   return (
    <>
      <div className={c.header}>
        <div className={c.left}>
          <div className={c.heading}>{header}</div>
          {isDate && <div className={c.date}>{date}</div>}
        </div>
        <div className={c.right}>
          {children}
        </div>
      </div>
      {isBorder && <div className={c.border}></div>}
    </>
   )
}