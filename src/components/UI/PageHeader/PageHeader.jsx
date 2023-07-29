import c from './PageHaeder.module.css'
const PageHeader = ({header, date}) => {
   return (
    <>
    <div className={c.header}>{header}</div>
    <div className={c.date}>{date}</div>
    </>
   )
}

export default PageHeader