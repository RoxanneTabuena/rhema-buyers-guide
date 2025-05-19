import { NavItem } from './NavItem'
import style from './root.module.css'

export const Header = ({arts}) => {
    return (
        <div className={style.head}>
            {arts.map(art=>{
                return <NavItem key={art} art={art}/>
            })}
        </div>
    )
}