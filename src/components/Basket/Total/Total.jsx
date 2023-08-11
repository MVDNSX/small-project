import c from './Total.module.css'

const Total = ({orderPrice, orderDiscount}) => {
  return (
    <div className={c.total}>
      <div className={c.total__item}>
        Discount
        <span>$ {orderDiscount}</span>
      </div>
      <div className={c.total__item}>
        Sub total
       <span>$ {orderPrice}</span>
      </div>
    </div>
  )
}

export default Total