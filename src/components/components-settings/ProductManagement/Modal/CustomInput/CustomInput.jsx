import c from './CustomInput.module.scss'

export const CustomInput = ({register, name, errors, ...props}) => {
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