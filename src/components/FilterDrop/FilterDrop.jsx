import {motion, AnimatePresence} from 'framer-motion'
import { useState, useRef } from 'react'
import './FilterDrop.css'
import { current } from '@reduxjs/toolkit'

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


export const Filter = () => {
	console.log('rerender')
	const [curValue, setCurValue] = useState('Cheapers');
	const [isDrop, setIsDrop] = useState(false)
	let ref = useRef(null)

	const changeSort = (e) => {
		setCurValue(e.target.innerText)
		setIsDrop(false);
	}



	 return (
		<div className='filter'>
			<div className="filter__current" 
			onClick={() => setIsDrop(!isDrop)}
			>{curValue}</div>
			<AnimatePresence>
				{isDrop 
				? <motion.div 
				className="filter__variants" 
				onClick={(e) => {changeSort(e)}}
				onMouseEnter={(e) => {mouseHandler(e)}}
				initial={{y: '20px', opacity: 0}} 
				animate={{y: 0, opacity:1}} 
				exit={{y: '20px', opacity: 0}} >
					<div>Cheapers</div>
					<div>Expencive</div>
					<div>Name</div>
					
				</motion.div>
				: null}
			</AnimatePresence>
		</div>
	 )
}
