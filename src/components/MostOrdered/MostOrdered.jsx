import c from './MostOrdered.module.scss'
import { useEffect, useState } from 'react'
import BlockHeader from '../UI/BlockHeader/BlockHeader'
import { CustomSelect } from '../UI/CustomSelect/CustomSelect'
import { CustomButton } from '../UI/CustomButton/CustomButton'
import { OrderedItem } from './OrderedItem/OrderedItem'
import {mockMostOrdered} from '../../mock/mockData'
import SkeletonMostOrdered from '../UI/Skeletons/SkeletonMostOrdered'


export const MostOrdered = () => {
  const options = [
    {value: 'today', name:'Today'},
    {value: 'week', name:'Week'},
    {value: 'month', name:'Month'},
	]
  const [mostOrder, setMostOrder] = useState(options[0])
  const [items, setItems] = useState()
  useEffect(()=>{
    setItems()
    const fakeLoad = setTimeout(() => {
      setItems([...mockMostOrdered[mostOrder.value]])
    }, 2000);
    return clearTimeout(fakeLoad)
  },[mostOrder])

   return (
    <div className={c.layout}>
      <BlockHeader header={'Most Ordered'} Border>
						<CustomSelect options={options} value={mostOrder.name} onChange={setMostOrder}/>
			</BlockHeader>

      <div className={c.items}>
        {items 
        ? items.map( (item, index) => <OrderedItem key={index} item={item}/> ) 
        :[...new Array(3)].map((_,index) => <SkeletonMostOrdered key={index}/>)}
      </div>

      <CustomButton neon text={'View All'}/>
    </div>
   )
}