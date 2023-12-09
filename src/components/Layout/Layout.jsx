import c from './Layout.module.scss'
export const Layout = ({children}) => {
	return (
		<div className={c.content__layout}>
			{children}
		</div>
	)
}