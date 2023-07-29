import { useState } from 'react'
import c from'./CategoryDiahes.module.css'

import {motion, AnimatePresence} from 'framer-motion'

const CategoryDishes = ({categories, onChange}) => {
	
	const [isActive, setActive] = useState(0)
	const handlerClick = (id) => {
		onChange(id)
		setActive(id)
	}

	return (
		<AnimatePresence>
			<div className={c.category__list}>	
				{categories.map( category => 
					<div 
					className={isActive === category.id ? [c.category__name, c.active].join(' ') : [c.category__name]}
					key={category.id} 
					item={category}
					onClick={()=> handlerClick(category.id)}>
						{category.name}
						{isActive === category.id && 
						<motion.div className={c.underline} layoutId='activeCategory'></motion.div>}
					</div>)}
			</div>
		</AnimatePresence>
	)
}

export default CategoryDishes