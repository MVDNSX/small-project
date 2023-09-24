import c from './GroupLayout.module.scss'

export const GroupLayout = ({title, errors, children}) => {
  return (
    <>
      <div className={errors ? `${c.group} ${c.required}` : `${c.group}`}>
        <div className={c.title}>{title}</div>
        {children}
      </div>
      {errors?.message 
        ? <p className={c.alert}>{errors?.message}</p> 
        : <p className={c.empty}></p>}
    </>
  )
}

{/*<label className={c.container}>
      <input className={c.category} type="radio" {...props} {...register(name)}/>
      <span className={c.text}>{text}</span>
    </label>*/}


{/*<div className={errors.name ? `${c.radio} ${c.required}` : `${c.radio}`}>
                <div className={c.title}>Category</div>
                {categories.map( ({text, value}) => {return <CustomRadio key={value} register={register} name='categoryId' text={text} value={value}/>} )}
              </div>
              {errors.categoryId?.message 
                ? <p className={c.alert}>{errors.categoryId?.message}</p> 
                : <p className={c.empty}></p>}
              </div>*/}