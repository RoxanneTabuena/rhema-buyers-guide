import { NavLink } from 'react-router-dom'
import { titleSequence } from '../content/articleDir'
import style from './root.module.css'

export const NavItem = ({art, heightX}) => {
const title = titleSequence[art]
if(art === 'intro'){
    return (
        <NavLink 
        className={`${style.link} link ${heightX}`}  
        to="/"
        state={{preserveScroll: false}}
        >
        <h2>{title}</h2>
        </NavLink>
    )
}
return (

    <NavLink 
    className={`${style.link} link ${heightX}`}  
    to={`/${art}`}
    state={{preserveScroll: false}}
    >
        <h2>{title}</h2>
    </NavLink> 
)}