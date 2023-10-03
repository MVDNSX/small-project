import c from './OrderedItem.module.scss'

export const OrderedItem = ({item}) => {
  const {name, orders, picture} = item 
  return (
    <div className={c.item}>
			<div className={c.img}>
				<img src={`http://localhost:5005/${picture}`} alt="" />
			</div>
			<div className={c.info}>
				<div className="dish_name">{name}</div>
				<div className={c.dish_ordered}>{orders} dishes ordered</div>
			</div>
		</div>
  )
}