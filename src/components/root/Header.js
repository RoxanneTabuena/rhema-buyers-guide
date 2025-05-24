import { NavItem } from './NavItem'
import style from './root.module.css'

export const Header = ({arts}) => {
    const lastIndex = arts.length-1
    const headerLinks =  arts.reverse().map((art, i)=>{
        let heightX
        switch(i){
            case 0:
                heightX = style.l
                break;
            case 1:
                heightX = style.m
                break;
            case 2:
                heightX = style.sm
                break;
            default:
                heightX = style.xs
                break;
        }
        return <NavItem key={art} art={art} heightX={heightX}/>
    })
    return (
        <div className={style.head}>
            {headerLinks.reverse()}
        </div>
    )
}