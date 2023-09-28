import * as yup from 'yup'

export const userRegSchema = yup.object({
  email: yup.string().email('Не валидный email').required('Обязательное поле'),
  password: yup.string().min(8, 'Минимум 8 символов').required('Обязательное поле'),
  confirmPassword: yup.string().required('Обязательное поле').oneOf([yup.ref('password')], 'Пароли должны совпадать')
})