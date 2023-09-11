import c from './Total.module.css'

const Total = ({totalCostBasket, totalDiscountBasket}) => {
  return (
    <div className={c.total}>
      <div className={c.total__item}>
        Discount
        <span>$ {totalDiscountBasket}</span>
      </div>
      <div className={c.total__item}>
        Sub total
       <span>$ {totalCostBasket}</span>
      </div>
    </div>
  )
}

export default Total