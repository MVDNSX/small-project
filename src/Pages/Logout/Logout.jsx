import { useState } from 'react'
import { CustomSelect } from '../../components/UI/CustomSelect/CustomSelect'
import c from './Logout.module.scss'
import { CustomButtonNeon } from '../../components/UI/CustomButtonNeon/CustomButtonNeon'
import BlockHeader from '../../components/UI/BlockHeader/BlockHeader'


const Logout = () => {
	const options = [
		{value: 1, name:'Today'},
    {value: 2, name:'Week'},
    {value: 3, name:'Month'},
	]

	const [mostOrder, setMostOrder] = useState(options[0])
	const [typeOrder, setTypeOrder] = useState(options[0])

	return (
		<div className={c.stat}>
			<BlockHeader header={'Most Ordered'} Border>
				<CustomSelect options={options} value={mostOrder.name} onChange={setMostOrder}/>
			</BlockHeader>


			<div className={c.content}>

				<div className={c.item}>
					<div className={c.img}>
						<img src="http://localhost:5005/0abdc590-a267-44e7-96ff-29fb92f3d6e1.png" alt="" />
					</div>
					<div className={c.info}>
						<div className="dish_name">Spicy seasoned seafood noodles</div>
						<div className={c.dish_ordered}>200 dishes ordered</div>
					</div>
				</div>

			</div>
			<CustomButtonNeon text={'Viev All'}/>


		</div>
	)
}

export default Logout