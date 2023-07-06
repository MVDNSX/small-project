


export function useDiscount(list) {
   return list.filter((item)=>{return item.discount > 0})
}