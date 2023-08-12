import PageHeader from '../../components/UI/PageHeader/PageHeader'
import Options from '../../components/components-settings/Options/Options'
import { getDateFormat } from '../../utils/getDate'
import c from './Settings.module.css'

const Settings = () => {
	const date = getDateFormat();
	return (
		<div className={c.settings}>
			<div className="header">
				<PageHeader header={'Settings'}/>
			</div>
			<div className={c.content}>
				<Options/>
				<div className="products"></div>
			</div>
		</div>
	)
}

export default Settings