import { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useObserver } from "../../../hooks/useObserver";
import { ScrollToTop } from "../../../hooks/ScrollToTop";
import { Preview } from "./Preview";
import style from './viewport.module.css'


export const Viewport = ({cur,artHeight, vpHeight, handlePreviewEnter, handlePreviewExit, handleAdvance}) => {
    const [ref, article] = useObserver({
        threshold: .01
    })
    const [reading, setReading] = useState(false)
    const top = useRef(null)
    useEffect(()=>{
        if(article){
            setReading(true)
        }else{
            if(reading){
                handleAdvance()
            }
        }
    },[article, reading])
    ScrollToTop(top)
    return (
        <div ref={top} className={style.viewport}>
            <div ref={ref} className={style.curArt} style={{minHeight: artHeight}}>
                <Outlet />
            </div>
            {cur !== 'timeline' &&
            <Preview 
                cur={cur} 
                height={vpHeight}
                handlePreviewEnter={handlePreviewEnter}
                handlePreviewExit={handlePreviewExit}/>
            }
        </div>
    )
}