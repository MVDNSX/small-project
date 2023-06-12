import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react'
import './Account.css'
import Entry from '../../components/Forms/Entry'
import Greeting from '../../components/Forms/Greeting'

const Account = (props) => {
	const [side, setSide] = useState(true);
	

	const handlerSide = () => {setSide(!side)}

	return (
		<div className="account-page">
			<AnimatePresence>
				<motion.div className={side ? 'main-form' : 'main-form form-reverse'}
				initial={{height:0, opacity:0}}
				animate={{height:500, opacity:1}}
				transition={{duration: 0.4}}>

					<motion.div 
					className="block-greeting" 
					layout
					transition={{duration: 0.6}}>
						<Greeting side={side} handlerSide={handlerSide}/>
					</motion.div>

					<motion.div 
					className="block-forms"
					layout
					transition={{duration: 0.6}}>
						<Entry side={side}/>
					</motion.div>
					
				</motion.div>
			</AnimatePresence>	
		</div>
	)
}

export default Account