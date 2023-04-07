import styles from './Basket.module.scss'
import dishes from '../../assets/cards/Image 1.png'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteDishes, changeCount } from '../../store/Slices/basketSlice'

export const BasketItem = ({dishesData, setTotal}) => {
	const dispatch = useDispatch();
	const {dishesId, price, name, discount, count} = dishesData
	const overPrice = count * price;

	useEffect(()=> {
		setTotal((prev) => prev + overPrice)
	}, [overPrice, count])


	return (<>
		<div className={styles.item}>
			<div className={styles.top}>

				<div className={styles.dishes}>
					<div className={styles.image}>
						<img src={dishes} alt="" />
					</div>
					<div className={styles.info}>
						<div className={styles.name}>{name}</div>
						<div className={styles.price_one}>{price}</div>
					</div>
				</div>
				<div className={styles.count}>
					<input type="text" value={count} maxLength={2} onChange={(e)=> {dispatch(changeCount({dishesId, count: +e.target.value}))}}/>
				</div>
				<div className={styles.price_all}>{overPrice}</div>
				
			</div>

			<div className={styles.bot}>
				<input type="text" placeholder='Order Note...' />
				<button onClick={() => dispatch(deleteDishes({dishesId}))}>
					<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
						<path className={styles.btn_icon} d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636" stroke="#464455"/>
					</svg>
				</button>
			</div>
		</div>
	</>
	)
}