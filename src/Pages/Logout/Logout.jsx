import './Logout.css'
import { CustomSelect } from './../../components/UI/CustomSelect/CustomSelect'
import { useState } from 'react'

const Logout = () => {
	const options = [
		{value: 1, name:'Today'},
    {value: 2, name:'Week'},
    {value: 3, name:'Month'},
	]
	const [sort, setSort] = useState(options[0])
	return (
		<div>
			<CustomSelect
			value={sort.name}
			options={options}
			onChange={setSort}
			/>
		</div>
	)
}

export default Logout