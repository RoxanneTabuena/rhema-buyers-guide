import { NavItem } from './NavItem'
import style from './root.module.css'

export const Footer = ({arts}) => {
    const footerLinks =  arts.map((art, i)=>{
        let heightX
        switch(i){
            case 0:
                heightX = style.xl
                break;
            case 1:
                heightX = style.l
                break;
            case 2:
                heightX = style.m
                break;
            case 3:
                heightX = style.sm
                break;
            default:
                heightX = style.xs
                break;
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