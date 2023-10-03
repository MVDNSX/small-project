import c from './MostType.module.scss'
import BlockHeader from '../UI/BlockHeader/BlockHeader'
import { CustomSelect } from '../UI/CustomSelect/CustomSelect'
import { useState } from 'react'

export const MostType = () => {

  const options = [
		{value: 1, name:'Today'},
    {value: 2, name:'Week'},
    {value: 3, name:'Month'},
	]
  const [typeOrder, setTypeOrder] = useState(options[0])
  
  return (
    <div className={c.layout}>
      <BlockHeader header={'Most Type of Order'} Border>
						<CustomSelect options={options} value={typeOrder.name} onChange={setTypeOrder}/>
			</BlockHeader>
    </div>
  )
}