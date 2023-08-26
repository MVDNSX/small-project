import { useGetDishesQuery } from '../../store/dishesAPI'

const Logout = () => {
	const {data, error, isLoading } = useGetDishesQuery()
	return (
		<div className="logout">
			{isLoading ?  <h1>loading</h1> :  data.map( i  => <div>{i.name}</div>)}
		</div>
	)
}

export default Logout