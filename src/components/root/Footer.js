import style from './root.module.css'

export const Footer = ({arts}) => {
    return (
        <div className={style.foot}>
            {arts.map(cat=>{
                return <p key={cat}>{cat}</p>
            })}
        </div>
    )
}