import { Layout } from '../../components/Layout/Layout'
import {PageHeader} from '../../components/UI/PageHeader/PageHeader'
import Options from '../../components/components-settings/Options/Options'
import c from './Settings.module.scss'
import {Outlet} from 'react-router-dom'

const Settings = () => {
	return (
		<Layout>
			<PageHeader header={'Settings'}/>
			
			<div className={c.content}>
				<Options/>
				<div className={c.page_bg}>
					<Outlet/>
				</div>
			</div>
		</Layout>
	)
}

export default Settings