import './Entry.css'
import { AnimatePresence, motion } from "framer-motion"
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { isAuth } from '../../store/Slices/authSlice';

const Entry = (props) => {
  const dispatch = useDispatch()
  
  const {side} = props
  const { register, handleSubmit,reset, watch, formState: { errors, isValid } } = useForm({mode: 'onBlur'});
  const onSubmit = data => {
    alert(JSON.stringify(data));
    dispatch(isAuth(true))
    reset();
  }
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
            <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
              <div className="register__title">Create Account</div>
              <input 
              {...register('name', 
              {required: 'Обязательное поле!', 
              minLength: {
                value: 3,
                message: 'Введенное имя слишком короткое!'
              },
              maxLength: {
                value: 12,
                message: 'Введенное имя слишком длинное!'
              }})} type="text"/>
              {errors.name && <p className='input-error' role="alert">{errors.name?.message}</p>}

              <input {...register('email',
              {required: 'Обязательное поле!', 
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Не валидный Email!'
              }})} type="email" autoComplete='off'/>
              {errors.email && <p className='input-error' role="alert">{errors.email?.message}</p>}

              <input {...register('password', 
              {required: 'Обязательное поле!', 
              minLength: {
                value: 8,
                message: 'Пароль слишком короткий!'
              },
              maxLength: {
                value: 12,
                message: 'Пароль слишком длинный!'
              }})} type="password"/>
              {errors.password && <p className='input-error' role="alert">{errors.password?.message}</p>}

              <button type='submit' className='register__btn'
              disabled={!isValid}>Sign up</button>
            </form>
      </motion.div>)
        : (<motion.div 
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{ opacity: 0}}
					transition={{duration: 0.3}}
          key='login'
					className='login'>
						<form onSubmit={handleSubmit(onSubmit)} className='login-form'>
              <div className="login__title">Sign in Account</div>

              <input {...register('email',
              {required: 'Обязательное поле!', 
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Не валидный Email!'
              }})} type="email" autoComplete='off'/>
              {errors.email && <p className='input-error' role="alert">{errors.email?.message}</p>}

              <input {...register('password', 
              {required: 'Обязательное поле!', 
              minLength: {
                value: 8,
                message: 'Пароль слишком короткий!'
              },
              maxLength: {
                value: 12,
                message: 'Пароль слишком длинный!'
              }})} type="password"/>
              {errors.password && <p className='input-error' role="alert">{errors.password?.message}</p>}
              
              <button type='submit' className='login__btn'
              disabled={!isValid}>Sign in</button>
            </form>
					</motion.div>
        )} 
			</AnimatePresence>
    </>
  )
}

export default Entry