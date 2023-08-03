import c from './Total.module.css'

const Total = () => {
  return (
    <div className={c.total}>
      <div className={c.total__item}>
        Discount
        <span>$ 0</span>
      </div>
      <div className={c.total__item}>
        Sub total
       <span>$ 21.3</span>
      </div>
    </div>
  )
}

export default Total