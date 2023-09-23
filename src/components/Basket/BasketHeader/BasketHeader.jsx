import c from './BasketHeader.module.css'

export const BasketHeader = () => {
   return (
    <div className={c.header}>
            <div className={c.order_number}>Your basket</div>
            <div className={c.columns}>
              <div className={c.column_header}>Item</div>
              <div>Qty</div>
              <div>Price</div>
            </div>
          </div>
   )
}
