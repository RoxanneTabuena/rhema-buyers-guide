import { NavLink } from 'react-router-dom'
import { titleSequence } from '../content/articleDir'
import { returnXL } from '../utils'
import style from './root.module.css'

export const NavItem = ({art, heightX}) => {
const title = titleSequence[art]
let className = returnXL(heightX)? 
`${style.link} ${heightX} link xl`:
`${style.link} ${heightX} link`
if(art === 'intro'){
    return (
        <NavLink 
        className={className}  
        to="/"
        state={{preserveScroll: false}}
        >
        <h2>{title}</h2>
        </NavLink>
    )
}
return (

    <NavLink 
    className={className}  
    to={`/${art}`}
    state={{preserveScroll: false}}
    >
        <h2>{title}</h2>
    </NavLink> 
)}