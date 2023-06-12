import './Entry.css'
import { AnimatePresence, motion } from "framer-motion"


const Entry = (props) => {
  const {side} = props
  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
				{side 
        ? (<motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
          key="register"
          className='register'>
            <form action="" className='register-form'>
              <div className="register__title">Create Account</div>
              <input type="text" placeholder='Name'/>
              <input type="email" placeholder='Email'/>
              <input type="password" placeholder='Password'/>
              <button className='register__btn'>Sign up</button>
            </form>
      </motion.div>)
        : (<motion.div 
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{ opacity: 0}}
					transition={{duration: 0.3}}
          key='login'
					className='login'>
						<form action="" className='login-form'>
              <div className="login__title">Sign in Account</div>
              <input type="email" placeholder='Email'/>
              <input type="password" placeholder='Password'/>
              <button className='login__btn'>Sign in</button>
            </form>
					</motion.div>
        )} 
			</AnimatePresence>
    </>
  )
}

export default Entry