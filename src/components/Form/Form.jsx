import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from 'react';
import Entry from '../../components/Forms/Entry'
import Greeting from '../../components/Forms/Greeting'
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'
import s from './Form.module.scss'


const Form = () => {
	const [side, setSide] = useState('login');

	const isAuth = useSelector((state) => state.user.isAuthUser)
	if(isAuth){
		return (<Navigate 
    to='/account/profile'/>)
	}
	return (
		<div className="form__container">
				<AnimatePresence>
					<motion.div className={side !== 'login' ? `${s['main-form']}` : `${s['main-form']} ${s['form-reverse']}`}
					initial={{height:0, opacity:0}}
					animate={{height:500, opacity:1}}
					transition={{duration: 0.4}}>

						<motion.div 
						className="block-greeting" 
						layout
						transition={{duration: 0.6}}>
							<Greeting side={side} handlerSide={setSide}/>
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

export default Form