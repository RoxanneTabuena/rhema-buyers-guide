import { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useObserver } from "../../../hooks/useObserver";
import { useAdjustScroll } from "../../../hooks/useAdjustScroll";
import { Preview } from "./Preview";
import style from './viewport.module.css'


export const Viewport = ({cur,artHeight, vpHeight, handlePreviewEnter, handlePreviewExit, handleAdvance, handleRetreat}) => {
    const [ref, article] = useObserver({
        threshold: .01
    })
    const [reading, setReading] = useState(false)
    const startRef = useRef(null)
    const endRef = useRef(null)
    const sentinelRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);
    // adjust scroll based on component entry method
    useAdjustScroll(startRef, endRef)

    // advance route at end of component
    useEffect(()=>{
        if(article){
        // start reading when main article comes into view
            setReading(true)
        }else{
        // advance article if article exits view during reading
            if(reading){
                handleAdvance()
            }
        }
    },[article, reading])

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

      //track when a user reaches top of component
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsAtTop(entry.isIntersecting);
          },
          {
            root: startRef.current,
            threshold: 1,
          }
        );
      
        if (sentinelRef.current) {
          observer.observe(sentinelRef.current);
        }
      
        return () => {
          if (sentinelRef.current) observer.unobserve(sentinelRef.current);
        };
      }, []);
    return (
        <div ref={startRef} className={style.viewport} onWheel={handleScroll}>
            <div ref={sentinelRef} style={{ height: '1px' }}></div>
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
          <div ref={endRef} style={{ height: '1px' }}></div>
        </div>
    )
}