import { SvgIcon } from '../../Svg/SvgIcon'
import c from './SummaryCard.module.scss'

const SummaryCard = ({icon, value, body, changes, stat}) => {
  return (
    <div className={c.summary}>
      <div className={c.header}>
        <div className={c.icon}>
          <SvgIcon id={icon}/>
        </div>
        <div className={stat ? `${c.status} ${c.status_up}` : `${c.status} ${c.status_down}`}>
          <div className={c.percents}>{changes}</div>
          <div className={c.arrow}>
            <SvgIcon id={'arrow'}/>
          </div>
        </div>
      </div>
      <div className={c.content}>
        <div className={c.heading}>{value}</div>
        <div className={c.body}>{body}</div>
      </div>
    </div>
  )
}

export default SummaryCard