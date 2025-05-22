import { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useObserver } from "../../../hooks/useObserver";
import { useAdjustScroll } from "../../../hooks/useAdjustScroll";
import { Preview } from "./Preview";
import style from './viewport.module.css'


export const Viewport = ({cur,artHeight, vpHeight, handlePreviewEnter, handlePreviewExit, handleAdvance, handleRetreat}) => {
    const viewportRef = useRef(null);
    // track when the main article is in view
    const [primaryArticleRef, primaryArticle] = useObserver({
        threshold: .01
    })
    // track when the user reaches the top of main article
    const [startRef, isAtTop] = useObserver({
      root: viewportRef.current,
      threshold: 1
    })
    const [reading, setReading] = useState(false)
    const endRef = useRef(null)
    const lastScrollY = useRef(0);
    // adjust scroll based on component entry method
    useAdjustScroll(viewportRef, endRef)

    // advance route at end of component
    useEffect(()=>{
        if(primaryArticle){
        // start reading when main article comes into view
            setReading(true)
        }else{
        // advance article if article exits view during reading
            if(reading){
                handleAdvance()
            }
        }
    },[primaryArticle, reading])

    // retreat route when user scrolls past top
    const handleScroll = (e) => {
        const node = e.currentTarget;
        const currentY = node.scrollTop;
        const scrollingUp = currentY < lastScrollY.current;
      
        if (isAtTop && scrollingUp) {
          handleRetreat()
        }
      
        lastScrollY.current = currentY;
      };

    return (
        <div ref={viewportRef} className={style.viewport} onWheel={handleScroll}>
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