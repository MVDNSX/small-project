import { motion, AnimatePresence } from "framer-motion"
import './Greeting.css'


const Greeting = (props) => {
  const {side, handlerSide} = props
  return (
    <div className="main-greeting">
      <AnimatePresence initial={false} mode='wait'>
        {side 
        ? (<motion.div className='greeting'
        initial={{x:-200, opacity: 0.3}}
        animate={{x:0, opacity: 1}}
        exit={{x:-200, opacity: 0.3}}
        transition={{duration: 0.28}}
        key='toLogin'>
          <div className="greeting__title">Welcome Back!</div>
          <div className="greeting__suptitle">To keep connected with us please login with your personal info</div>
          <motion.button onClick={handlerSide}
            className='greeting__btn'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            >Sign in
          </motion.button>
        </motion.div>)
        : (<motion.div className='greeting'
        initial={{x:200, opacity: 0.3}}
        animate={{x:0, opacity: 1}}
        exit={{x:200, opacity: 0.3}}
        transition={{duration: 0.28}}
        key='toRegister'>
          <div className="greeting__title">Hello, Friend!</div>
          <div className="greeting__suptitle">Enter your personal details and start journey with us</div>
          <motion.button onClick={handlerSide}
            className='greeting__btn'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            >Sign up
          </motion.button>
      </motion.div>)}
      </AnimatePresence>
    </div>
  )
}

export default Greeting