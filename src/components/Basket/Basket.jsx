import styles from './Basket.module.scss'
import { BasketItem } from './BasketItem'

export const Basket = () => {
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
					<BasketItem/>
				</div>
			</div>
			<div className={styles.total}>
				<div className={styles.stroke}>
					<div className={styles.names}>Discount</div>
					<div className={styles.count}>$0</div>
				</div>
				<div className={styles.stroke}>
					<div className={styles.names}>Sub total</div>
					<div className={styles.count}>$ 21,03</div>
				</div>
			</div>
		</div>
	)
}