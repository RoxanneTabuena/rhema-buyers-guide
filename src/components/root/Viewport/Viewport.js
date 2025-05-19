import { Preview } from "./Preview";
import { Outlet } from "react-router-dom";
import { Article } from "../../Article/Article";
import style from './viewport.module.css'

export const Viewport = ({cur}) => {
    return (
        <div className={style.viewport}>
            <Outlet />
            <Preview cur={cur}/>
        </div>
    )
}