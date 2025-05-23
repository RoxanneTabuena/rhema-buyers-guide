import { NavItem } from './NavItem'
import style from './root.module.css'

export const Footer = ({arts}) => {
    const footerLinks =  arts.map((art, i)=>{
        let heightX = style.sm
        if(i === 0){
            heightX = style.m
        }
        return <NavItem key={art} art={art} heightX={heightX}/>
    })
    if(arts){
        return (
            <div className={style.foot}>
                {footerLinks}
            </div>
        )
    }
}