import { useState } from 'react'
import {CustomSelect} from '../UI/CustomSelect/CustomSelect'
import c from './OrderLayout.module.scss'
import Order from './Orders/Order'
import { getOptionsSortOrder } from '../../utils/getOptionSort'
import { getOrders } from '../../utils/getOrders'
import { useOrders } from '../../hooks/useOrders'

const OrderLayout = () => {

   const orders = getOrders();

   const [orderFilter, setOrderFilter] = useState({sort: '', sortName: ''})
   const options = getOptionsSortOrder();
   const filterOrders = useOrders(orders, orderFilter.sort)
   return (
      <div className={c.orderLayout}>
         <div className={c.heading__wrapper}>
            <div className={c.heading}>
               <div className={c.title}>Your orders</div>
               <CustomSelect
                  value={orderFilter.sortName}
                  defaultValue={'Filter Order'}
                  onChange={sort => {setOrderFilter({sort: sort.value, sortName: sort.name})}}
                  options={options}
               />
            </div>
            <div className={c.columns}>
               <div >Customer</div>
               <div >Menu</div>
               <div className={c.payment}>Total</div>
               <div className={c.status}>Status</div>
            </div>
         </div>
         <div className={c.order__wrapper}>
            {filterOrders.map( order => <Order key={order.orderNumber} order={order}/>)}
         </div>
      </div>
   )
}

export default OrderLayout