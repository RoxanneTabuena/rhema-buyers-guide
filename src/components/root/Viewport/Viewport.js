import { Preview } from "./Preview";
import { Outlet } from "react-router-dom";
import style from './viewport.module.css'


export const Viewport = ({cur,artHeight, vpHeight, handlePreviewEnter, handlePreviewExit}) => {

    return (
        <div className={style.viewport}>
            <div className={style.curArt} style={{minHeight: artHeight}}>
                <Outlet />
                <span id="end"></span>
            </div>
            <Preview 
                cur={cur} 
                height={vpHeight}
                handlePreviewEnter={handlePreviewEnter}
                handlePreviewExit={handlePreviewExit}/>
        </div>
    )
}