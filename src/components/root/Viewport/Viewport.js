import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useObserver } from "../../../hooks/useObserver";
import { Preview } from "./Preview";
import style from './viewport.module.css'


export const Viewport = ({cur,artHeight, vpHeight, handlePreviewEnter, handlePreviewExit, handleAdvance}) => {
    const [ref, article] = useObserver({
        threshold: .01
    })
    const [reading, setReading] = useState(false)
    useEffect(()=>{
        if(article){
            setReading(true)
        }else{
            if(reading){
                handleAdvance()
            }
        }
    },[article, reading])
    return (
        <div className={style.viewport}>
            <div ref={ref} className={style.curArt} style={{minHeight: artHeight}}>
                <Outlet />
            </div>
            <Preview 
                cur={cur} 
                height={vpHeight}
                handlePreviewEnter={handlePreviewEnter}
                handlePreviewExit={handlePreviewExit}/>
        </div>
    )
}