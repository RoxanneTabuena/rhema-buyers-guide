import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { useAdjustScroll } from "../../../hooks/useAdjustScroll";
import { Preview } from "./Preview";
import style from './viewport.module.css'


export const Viewport = ({
    cur,
    artHeight, 
    vpHeight, 
    handlePreviewEnter, 
    handlePreviewExit, 
    primaryRef, 
    topRef, 
    viewportRef}) => {
    const bottomRef = useRef(null)
    // adjust scroll based on component entry method
    useAdjustScroll(viewportRef, bottomRef)

    return (
        <div ref={viewportRef} className={style.viewport}>
            <div ref={topRef} style={{ height: '1px' }}></div>
            <div ref={primaryRef} className={style.curArt} style={{minHeight: artHeight}}>
                <Outlet />
            </div>
            {cur !== 'timeline' &&
            <Preview 
            cur={cur} 
            height={vpHeight}
            handlePreviewEnter={handlePreviewEnter}
            handlePreviewExit={handlePreviewExit}/>
          }
          <div ref={bottomRef} style={{ height: '1px' }}></div>
        </div>
    )
}