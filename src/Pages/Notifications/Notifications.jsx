import c from './Notifications.module.scss'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { createPortal } from 'react-dom'
const Notifications = () => {
	const [selectedId, setSelectedId] = useState(null)
	const items = [{id:1,subtitle:123, title:123}, {id:2,subtitle:456, title:456}]
	return (
		<div className={c.notifications}>
			{items.map(item => (
				<motion.div className={c.close} layoutId={item.id} onClick={() => setSelectedId(item.id)}>
					<motion.h5>{item.subtitle}</motion.h5>
					<motion.h2>{item.title}</motion.h2>
				</motion.div>
			))}

			{createPortal(<AnimatePresence>
				{selectedId && 
					<motion.div className={c.open} layoutId={selectedId}>
						<motion.h5>{}</motion.h5>
						<motion.h2>{}</motion.h2>
						<motion.button onClick={() => setSelectedId(null)} text='close'>close</motion.button>
					</motion.div>}
			</AnimatePresence>, document.body)}
		</div>
	)
}

export default Notifications
