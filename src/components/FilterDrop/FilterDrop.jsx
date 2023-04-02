import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import './FilterDrop.css'

export const FilterDrop = ({current, setCurrent, drop, setDrop}) => {

	const [hover, setHover] = useState(0)
	
	const sorts = [{type: 'price', name: 'Cheapers'}, {type: '-price', name: 'Expencive'}, {type: 'name', name: 'Name'}]
	const handleClick = (id) => {
		if(id !== current){
			setCurrent(id);
		}
		setDrop(!drop)
	}
	return (
		<div className="dishes__filter filter">
			<div className="filter__current" onClick={()=>{setDrop(!drop)}} >{current.name}</div>
			<AnimatePresence>
				{drop 
					?	<motion.div 
						initial={{y: '20px', opacity: 0}} 
						animate={{y: 0, opacity:1}} 
						exit={{y: '20px', opacity: 0}} 
						className="filter__variants">
							{sorts.map((item, index) => 
								<div 
									key={index} 
									onClick={() => {handleClick(item)}} 
									onMouseOver={()=>{setHover(index)}}
									className={`filter__variant`}>{item.name}
										{ hover === index ? <motion.div layoutId='dropLayout' className='drop__hover'></motion.div> : null}
								</div>)}
						</motion.div> 
					: null}
			</AnimatePresence>
		</div>
	)
}