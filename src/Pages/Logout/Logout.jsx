import { useDispatch } from 'react-redux'
import CustomButton from '../../components/UI/CustomButton/CustomButton'
import { resetUser } from '../../store/Slices/userSlice'
import './Logout.css'
import {useForm, Controller} from 'react-hook-form'
import { CustomSelect } from '../../components/components-settings/ProductManagement/Modal/CustomSelect/CustomSelect'

const Logout = () => {
	//const dispatch = useDispatch()
	const options = [
    {id: 1, name:'Hot Dishes'},
    {id: 2, name:'Cold Dishes'},
    {id: 3, name:'Soup'},
    {id: 4, name:'Grill'},
    {id: 5, name:'Appetizer'},
    {id: 6, name:'Dessert'},
  ]

	const {control, handleSubmit} = useForm(
		{
			defaultValues: {
				categoryId: 1
			}
		}
	)
	return (
		<div className="logout" style={{padding: 25}}>
			{/*<CustomButton onClick={()=>dispatch(resetUser())}>Logout</CustomButton>*/}
			<form onSubmit={handleSubmit(data => console.log(data))}>
			<Controller
        control={control}
        name="categoryId"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <CustomSelect
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
						options={options}
						placeholder={'Select category'}
          />
        )}
      />


				<button type='submit'>submit</button>
			</form>

		</div>
	)
}

export default Logout