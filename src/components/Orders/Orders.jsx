import { useState } from 'react'
import { useOrders } from '../../hooks/useOrders'
import { getOptionsSortOrder } from '../../utils/getOptionSort'
import { getOrders } from '../../utils/getOrders'
import c from './Orders.module.scss'
import BlockHeader from '../UI/BlockHeader/BlockHeader'
import { CustomSelect } from '../UI/CustomSelect/CustomSelect'
import Order from './Order/Order'

export const Orders = () => {

   const orders = getOrders();

   const [orderFilter, setOrderFilter] = useState({sort: '', sortName: ''})
   const options = getOptionsSortOrder();
   const filterOrders = useOrders(orders, orderFilter.sort)
   return (
     <div className={c.layout}>
         <BlockHeader header={'Order Report'}>
            <CustomSelect
               value={orderFilter.sortName}
               defaultValue={'Filter Order'}
               onChange={sort => {setOrderFilter({sort: sort.value, sortName: sort.name})}}
               options={options}/>
         </BlockHeader>
         <div className="content">
            {filterOrders.map( order => <Order key={order.orderNumber} order={order}/>)}
         </div>
     </div>
   )
}


{/*<div className={c.order__wrapper}>
            {filterOrders.map( order => <Order key={order.orderNumber} order={order}/>)}
         </div>*/}