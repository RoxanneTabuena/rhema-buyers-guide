import { NavItem } from './NavItem'
import style from './root.module.css'

export const Header = ({arts}) => {
    const lastIndex = arts.length-1
    const headerLinks =  arts.map((art, i)=>{
        let heightX = style.sm
        if(i === lastIndex){
            heightX = style.m
        }
        return <NavItem key={art} art={art} heightX={heightX}/>
    })
    return (
        <div className={style.head}>
            {headerLinks}
        </div>
    )
}