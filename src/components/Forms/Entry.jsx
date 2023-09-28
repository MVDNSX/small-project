import { AnimatePresence, motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLoginUserMutation, useRegUserMutation } from '../../store/authAPI'
import './Entry.css'
import { useDispatch, useSelector } from 'react-redux'
import { FormReg } from './FormReg/FormReg'
import { FormAuth } from './FormAuth/FormAuth'

const Entry = ({side}) => {
  const [regUser] = useRegUserMutation()
  const [loginUser] = useLoginUserMutation()

  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
				{side == 'login'
        ? (<motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            key="register"
            className='register'>
              <FormReg/>
          </motion.div>)
        : (<motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0}}
            transition={{duration: 0.3}}
            key='login'
            className='login'>
						<FormAuth/>
					</motion.div>
        )} 
			</AnimatePresence>
    </>
  )
}

export default Entry