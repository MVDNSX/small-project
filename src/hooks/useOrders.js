import { useMemo } from 'react'


export const useOrders = (orders, sort) => {
  const filterOrders = useMemo(()=>{
    if(sort){
      return orders.filter( order => (order.status === sort))
    }else{
      return orders
    }
  }, [orders, sort])
  return filterOrders
}