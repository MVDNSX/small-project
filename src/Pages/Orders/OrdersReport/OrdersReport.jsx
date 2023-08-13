
import { SvgIcon } from '../../../components/Svg/SvgIcon'
import c from './OrdersReport.module.scss'

const OrdersReport = () => {
  return (
    <div className={c.reports}>
      <div className={c.top}>
        <div className={c.heading}>Order Report</div>
        <div className={c.filter}>
          <SvgIcon id={'filter'}></SvgIcon>
          <div className={c.filterName}>Filter Order</div>
        </div>
      </div>
      <div className={c.main}>
        <div className={c.columns}>
          <div className={c.column}>Customer</div>
          <div className={c.column}>Total Payment</div>
          <div className={c.column}>Status</div>
        </div>
        <div className={report}>
          <div className="number"></div>
          <div className="payment"></div>
          <div className="status"></div>
        </div>
      </div>
    </div>
  )
}

export default OrdersReport