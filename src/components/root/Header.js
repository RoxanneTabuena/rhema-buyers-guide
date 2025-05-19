import style from './root.module.css'

export const Header = ({arts}) => {
    return (
        <div className={style.head}>
            {arts.map(cat=>{
                return <p key={cat}>{cat}</p>
            })}
        </div>
    )
}