import * as yup from 'yup'

export const userAuthSchema = yup.object({
  email: yup.string().email('Не валидный email').required('Обязательное поле'),
  password: yup.string().min(8, 'Не может быть меньше 8 символов').required('Обязательное поле'),
})