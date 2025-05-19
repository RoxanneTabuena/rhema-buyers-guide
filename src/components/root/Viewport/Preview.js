import { NavItem } from "../NavItem";
import { titleSequence } from "../../content/articleDir";
import { miniRouter } from "./miniRouter";
import { getNextArt } from "../../utils";
import style from './viewport.module.css'

export const Preview = ({cur}) => {
    const next = getNextArt(cur)
    return (
        <div className={style.preview}>
            <NavItem art={next}>
            <h2>{titleSequence[next]}</h2>
            </NavItem>
            {miniRouter[next]}
        </div>
    )
}