import c from './User.module.scss'
import avatar from '../../assets/avatar/user-avatar.png'
import {CustomInput} from '../UI/CustomInput/CustomInput'

export const User = () => {

	return (
			<div className={c.user}>

				<div className={c.info}>

					<div className={c.avatar}>
						<img src={avatar} alt="" />
					</div>

					<div className={c.data}>
						<div className={c.name}>Eren Yeager</div>
						<div className={c.registered}>Member since 12 april 2023</div>
					</div>

				</div>
				<div className={c.modify}>
					<CustomInput id='name' labelText='Name' placeholder='Eren yeager' autoComplete='off'/>
					<CustomInput id='email' labelText='Email' placeholder='Eren101@gmail.com' autoComplete='off'/>
				</div>
			</div>
	)
} 