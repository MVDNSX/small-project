import c from './OrderLayout.module.scss'
import Order from './Orders/Order'

const OrderLayout = () => {
   return (
      <div className={c.orderLayout}>
         <div className={c.heading__wrapper}>
            <div className={c.heading}>
               <div className={c.title}>Your orders</div>
               <div className={c.filter}>filter</div>
            </div>
            <div className={c.columns}>
               <div >Customer</div>
               <div >Menu</div>
               <div >Total</div>
               <div >Status</div>
            </div>
         </div>
         <div className={c.order__wrapper}>
            <Order/>
            <Order/>
            <Order/>
         </div>
      </div>
   )
}

export default OrderLayout