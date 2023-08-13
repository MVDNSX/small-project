import PageHeader from '../../components/UI/PageHeader/PageHeader'
import Options from '../../components/components-settings/Options/Options'
import c from './Settings.module.css'

const Settings = () => {
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