import { useForm } from "react-hook-form"
import { Orders } from '../Orders/Orders'
import c from './Profile.module.scss'
const Profile = () => {

	const { register, handleSubmit, formState: { errors, isValid}} = useForm({mode: 'onChange'});
	const name = 'Eren yeager';
	const email = 'Eren101@gmail.com';
	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	}
	return (
		<div className={c.profile}>
			<div className={c.user}></div>
			<div className={c.most_order}></div>

			{/*<div className="user-profile">

				<div className="user-data">

					<div className="user-data__avatar"><img src={avatar} alt="" /></div>

					<div className="user-data__info">
						<div className="user-data__name">Eren Yeager</div>
						<div className="user-data__creation">Member since 12 mars 2023</div>
					</div>

				</div>

				<form className="user-data__form"
					onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="udn" className='user-data__label' >Name</label>
					<input id='udn' type="text" className={ errors.name?.message 
						? 'user-data__input not-valid' 
						: 'user-data__input' } 
					defaultValue={name}
					{...register('name', 
              {required: 'Обязательное поле!', 
              minLength: {
                value: 5,
                message: 'Cлишком короткое имя!'
              },
              maxLength: {
                value: 20,
                message: 'Слишком длинное имя!'
              }})}/>

					<label htmlFor="ude" className='user-data__label' >Email</label>
					<input id='ude' type="text" 
					className={ errors.email?.message 
						? 'user-data__input not-valid' : 'user-data__input' }
					defaultValue={email}
					{...register('email',
              {pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Не валидный Email!'
              }})}/>
					<button type='submit' className='user-data__save'
					disabled={!isValid}>Save changes</button>
				</form>

			</div>

			<div className="most-order">

				<div className="most-order__title">Most Ordered</div>
				<div className="most-order__top">

					<div className="top__item">
						<div className="top__image-dish"><img src={dishIMG} alt="" /></div>
						<div className="top__info">
							<div className="top__name-dish">Spicy seasoned seafood noodles</div>
							<div className="top__order-val">200 dishes ordered</div>
						</div>
					</div>

					<div className="top__item">
						<div className="top__image-dish"><img src={dishIMG2} alt="" /></div>
						<div className="top__info">
							<div className="top__name-dish">Salted pasta with mushroom sauce</div>
							<div className="top__order-val">120 dishes ordered</div>
						</div>
					</div>

					<div className="top__item">
						<div className="top__image-dish"><img src={dishIMG3} alt="" /></div>
						<div className="top__info">
							<div className="top__name-dish">Beef dumpling in hot and sour soup</div>
							<div className="top__order-val">80 dishes ordered</div>
						</div>
					</div>

				</div>

			</div>
*/}

			<div className={c.order_wrapper}>
				<Orders/>
			</div>
		</div>
	)
} 

export default Profile