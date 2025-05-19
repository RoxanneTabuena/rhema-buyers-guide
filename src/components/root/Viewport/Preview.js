import { titleSequence } from "../../content/articleDir";
import { miniRouter } from "./miniRouter";
import { getNextArt } from "../../utils";
import style from './viewport.module.css'

export const Preview = ({cur}) => {
    console.log(cur)
    const next = getNextArt(cur)
    return (
        <div className={style.preview}>
            <p>preview</p>
            <h2>{titleSequence[next]}</h2>
            {miniRouter[next]}
            <p>preview</p>
        </div>
    )
}