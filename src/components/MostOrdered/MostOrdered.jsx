import c from './MostOrdered.module.scss'
import { useState } from 'react'
import BlockHeader from '../UI/BlockHeader/BlockHeader'
import { CustomSelect } from '../UI/CustomSelect/CustomSelect'
import { CustomButton } from '../UI/CustomButton/CustomButton'
import { OrderedItem } from './OrderedItem/OrderedItem'

export const MostOrdered = () => {
  const options = [
		{value: 1, name:'Today'},
    {value: 2, name:'Week'},
    {value: 3, name:'Month'},
	]
  const items = [
    {name:'Fresh eggs', orders: 200, picture:'0abdc590-a267-44e7-96ff-29fb92f3d6e1.png'},
    {name:'Pasta Carbonara', orders: 125, picture:'cc44093c-27ec-44c0-be9f-42b765ba6b7e.png'},
    {name:'Hinkali', orders: 80, picture:'c20dc9f0-d129-4c3d-97dd-f523a444f7ae.png'},
  ]

	const [mostOrder, setMostOrder] = useState(options[0])
   return (
    <div className={c.layout}>
      <BlockHeader header={'Most Ordered'} Border>
						<CustomSelect options={options} value={mostOrder.name} onChange={setMostOrder}/>
			</BlockHeader>

      <div className={c.items}>
        {items.map( item => <OrderedItem item={item}/> )}
      </div>

      <CustomButton neon text={'View All'}/>
    </div>
   )
}