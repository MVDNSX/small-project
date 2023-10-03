import c from './BlockHeader.module.scss'
const BlockHeader = ({header, children, Border}) => {
   return (
    <>
      <div className={c.header}>
        <div className={c.left}>
          <div className={c.heading}>{header}</div>
        </div>
        <div className={c.right}>
          {children}
        </div>
      </div>
      {Border && <div className={c.border}></div>}
    </>
   )
}

export default BlockHeader