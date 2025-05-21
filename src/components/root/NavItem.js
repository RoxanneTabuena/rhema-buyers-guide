import { NavLink } from 'react-router-dom'
import { titleSequence } from '../content/articleDir'
import style from './root.module.css'

export const NavItem = ({art}) => {
const title = titleSequence[art]
return (
    <NavLink className={`${style.link} link`}  to={`/${art}`}>
        <h2>{title}</h2>
    </NavLink>
)}