import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { useObserver } from "../../../hooks/useObserver";
import { useAdjustScroll } from "../../../hooks/useAdjustScroll";
import { Preview } from "./Preview";
import style from './viewport.module.css'


export const Viewport = ({
    cur,
    artHeight, 
    vpHeight, 
    handlePreviewEnter, 
    handlePreviewExit, 
    primaryArticleRef, 
    startRef, 
    viewportRef}) => {
    const endRef = useRef(null)
    // adjust scroll based on component entry method
    useAdjustScroll(viewportRef, endRef)

    return (
        <div ref={viewportRef} className={style.viewport}>
            <div ref={startRef} style={{ height: '1px' }}></div>
            <div ref={primaryArticleRef} className={style.curArt} style={{minHeight: artHeight}}>
                <Outlet />
            </div>
            {cur !== 'timeline' &&
            <Preview 
            cur={cur} 
            height={vpHeight}
            handlePreviewEnter={handlePreviewEnter}
            handlePreviewExit={handlePreviewExit}/>
          }
          <div ref={endRef} style={{ height: '1px' }}></div>
        </div>
    )
}