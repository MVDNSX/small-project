
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CustomInputForm } from '../../UI/CustomInputForm/CustomInputForm'
import { userAuthSchema } from '../../../Validation/userAuthSchema'
import { useLoginUserMutation } from '../../../store/authAPI'
import { ButtonForm } from '../../UI/ButtonForm/ButtonForm'


export const FormAuth = () => {
  const {register, formState:{errors, isValid}, handleSubmit} = useForm({
    resolver: yupResolver(userAuthSchema)
  })
  const [loginUser] = useLoginUserMutation()
  const onAuth = (data) => {
    loginUser(data)
    
  }
  return (
    <form onSubmit={handleSubmit(onAuth)} className='entryForm'>
      <div className='form__title'>Sign in Account</div>
      <CustomInputForm
        register={register}
        errors={errors.email}
        name='email'
        type='text'
        placeholder='Email'
        autoComplete='off'
      />
      <CustomInputForm
        register={register}
        errors={errors.password}
        name='password'
        type='password'
        placeholder='Password'
        autoComplete='off'
      />
      <ButtonForm text='Sign in' type='submit' invers/>
    </form>
  )
}