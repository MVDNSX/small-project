
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userRegSchema } from '../../../Validation/userRegSchema'
import { CustomInputForm } from '../../UI/CustomInputForm/CustomInputForm'
import { useRegUserMutation } from '../../../store/authAPI'
import { ButtonForm } from '../../UI/ButtonForm/ButtonForm'


export const FormReg = () => {
  const {register, formState:{errors}, handleSubmit, reset} = useForm({
    resolver: yupResolver(userRegSchema)
  })
  const [regUser] = useRegUserMutation()
  const onRegistration = ({email, password}) => {
    regUser({email, password})
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onRegistration)} className='entryForm'>
      <div className="form__title">Create Account</div>
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
      <CustomInputForm
        register={register}
        errors={errors.confirmPassword}
        name='confirmPassword'
        type='password'
        placeholder='Confirm password'
        autoComplete='off'
      />
      <ButtonForm type='submit' text='Sign up' invers/>
    </form>
  )
}