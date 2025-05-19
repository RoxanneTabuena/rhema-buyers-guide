import { NavItem } from './NavItem'
import style from './root.module.css'

export const Footer = ({arts}) => {
    if(arts){
        return (
            <div className={style.foot}>
                {arts.map(art=>{
                    return <NavItem key={art} art={art}/>
                })}
            </div>
        )
    }
}