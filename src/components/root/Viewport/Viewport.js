import { Preview } from "./Preview";
import { Outlet } from "react-router-dom";
import { Article } from "../../Article/Article";
import style from './viewport.module.css'

export const Viewport = ({cur}) => {
    return (
        <div className={style.viewport}>
            <div className={style.cur}>
                <p>main</p>
                { cur === 'intro'? 
                <Article art={'intro'}/>
                : <Outlet/>
                }
                <p>main</p>
            </div>
            <Preview cur={cur}/>
        </div>
    )
}