import c from './CustomInputForm.module.scss'

export const CustomInputForm = ({name, errors,register, ...props}) => {
  return (
    <>
      <input 
        {...register(name)} 
        {...props}
        className={errors ? `${c.input} ${c.required}` : `${c.input}`}/>
        {errors?.message 
          ? <p className={c.alert}>{errors?.message}</p> 
          : <p className={c.empty}></p>}
    </>
  )
}