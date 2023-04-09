import { useEffect, useState } from 'react'
import styles from './Basket.module.scss'
import { BasketItem } from './BasketItem'
import { useSelector } from 'react-redux'

export const Basket = ({isOpen}) => {
	const basket = useSelector(state => state.basket.order);
	const total = +(basket.reduce((total, item) => total + (item.count * item.finalPrice), 0)).toFixed(2)
	const withOutDiscont = +(basket.reduce((total, item) => total + (item.count * item.price), 0)).toFixed(2)
	const discount = +(withOutDiscont - total).toFixed(2);

	return (
		<div className={styles.basket}>
			<div className={styles.number_order}>Orders #34562</div>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.dishes}>Item</div>
					<div className={styles.quantity}>Qty</div>
					<div className={styles.price}>Price</div>
				</div>
				<div className={styles.main}>
					{basket.map((item, index) => <BasketItem key={index} dishesData={item}/>)}
				</div>
			</div>
			<div className={styles.total}>
				<div className={styles.discount}>
					<div className={styles.names}>Discount</div>
					<div className={styles.count}>$ {discount}</div>
				</div>
				<div className={styles.sub_total}>
					<div className={styles.names}>Sub total</div>
					<div className={styles.count}>{total}</div>
				</div>
				<div className={styles.buttons}>
					<button onClick={isOpen} className={styles.button}>Go back</button>
					<button className={styles.button}>Continue to Payment</button>
				</div>
			</div>
		</div>
	)
}