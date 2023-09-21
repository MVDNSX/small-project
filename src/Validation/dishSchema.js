import * as yup from 'yup'

export const dishSchema = yup.object({
  name: yup
          .string()
          .min(4, 'Минимальное количество символов 4')
          .max(30, 'Максимальное количество символов 30')
          .ensure()
          .required('Обязательное поле'),
  price: yup
          .number()
          .positive('Значение должно быть положительным числом')
          .moreThan(0, 'Значение должно быть больше нуля')
          .required('Обязательное поле')
          .typeError('Введите числовое значение'),
  discount: yup
              .number()
              .positive('Значение должно быть положительным числом')
              .min( 0,'Минимальное значение 0')
              .max(99,'Максимальное значение 99')
              .integer('Значение должно быть целым числом')
              .required('Обязательное поле')
              .typeError('Введите числовое значение'),
  categoryId: yup
                .number()
                .integer()
                .moreThan(0, 'Необходимо выбрать категорию')
                .required('Обязательное поле'),
  picture: yup
              .mixed()
              .test('required', "Необходимо выбрать изображение продукта", (value) =>{
                return value && value.length
              } )
              .test("fileSize", "Большой размер изображения", (value, context) => {
                return value && value[0] && value[0].size <= 200000;
              })
              .test("type", "Поддерживается только png формат", function (value) {
                return value && value[0] && value[0].type === "image/png";
              }),
})