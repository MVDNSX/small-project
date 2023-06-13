import { AnimatePresence, motion } from "framer-motion"
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'
import './Account.css'
import Entry from '../../components/Forms/Entry'
import Greeting from '../../components/Forms/Greeting'

const Account = (props) => {
	const [side, setSide] = useState(true);
	const [search, setSearch] = useState('')
	const handlerSide = () => {setSide(!side)}

	return (
		<div className="account-page">
			<div className="account__header">
					<div className="account__info info">
						<div className="info__name title">User account</div>
						<div className="info__date date">Tuesday, 2 Feb 2021</div>
					</div>
					<div className="account__search home__search">
						<BiSearch size='20' color='#fff'/>
						<input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder='Search for food, coffe, etc..' value={search} />
					</div>
				</div>
				
				<div className="form__container">
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
				
		</div>
	)
}

export default Account