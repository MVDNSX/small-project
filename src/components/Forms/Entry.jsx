import { AnimatePresence, motion } from "framer-motion"
import { FormReg } from './FormReg/FormReg'
import { FormAuth } from './FormAuth/FormAuth'
const Entry = ({side}) => {

  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
				{side == 'login'
        ? (
          <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{ opacity: 0}}
          transition={{duration: 0.3}}
          key='login'
          className='login'>
          <FormAuth/>
        </motion.div>
        )
        : (
          <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            key="register"
            className='register'>
              <FormReg/>
          </motion.div>
        )} 
			</AnimatePresence>
    </>
  )
}

export default Entry