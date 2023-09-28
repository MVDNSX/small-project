import { useDispatch } from 'react-redux'
import CustomButton from '../../components/UI/CustomButton/CustomButton'
import { resetUser } from '../../store/Slices/userSlice'
import './Logout.css'
import {useForm, Controller} from 'react-hook-form'
import { CustomSelect } from '../../components/components-settings/ProductManagement/Modal/CustomSelect/CustomSelect'
import { FormReg } from '../../components/Forms/FormReg/FormReg'

const Logout = () => {
	return (
		<>
		<FormReg/>
		</>
	)
}

export default Logout