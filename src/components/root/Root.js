import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useVisibility } from "../../hooks/useVisibility";
import { useNavThrottle } from "../../hooks/useNavThrottle";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { 
        getHeadArts, 
        getFootArts, 
        getArtFromPath, 
        getMainHeight, 
        getArtHeight,
        formatHeight,
       } from "../utils";
import { NavItem } from "./NavItem";
import style from './root.module.css'
import { Viewport } from "./Viewport/Viewport";

export const Root = () => {
    const viewportRef = useRef(null);
    // track when the main article is in view
    const [primaryRef, primaryIsVisible] = useVisibility({
        threshold: .01
    })
    // track when the user reaches the top of main article
    const [topRef, topIsVisible] = useVisibility({
        root: viewportRef.current,
        threshold: 1
    })
    const [ curArt, setCurArt ] = useState('intro')
    const [ vpHeight, setVPHeight] = useState('200px')
    const [ artHeight, setArtHeight] = useState('200px')
    const [footer, setFooter] = useState(getFootArts(curArt))
    const { pathname } = useLocation()
    const { handleAdvance, handleRetreat} = useNavThrottle(200)
    const lastScrollY = useRef(0);
    // update article and footer according to pathname
    useEffect(()=>{
        const nextArt = pathname === '/' ? 'intro' : getArtFromPath(pathname);
        setCurArt(nextArt);
        setFooter(getFootArts(nextArt));
    }, [pathname])
    // advance route at end of primary article
    useEffect(()=>{
        if(!primaryIsVisible){
            handleAdvance()
        }
    },[primaryIsVisible])
    // retreat route when user scrolls past top
    const handleScroll = useCallback(() => {
        const node = viewportRef.current;
        if (!node) return;

        const currentY = node.scrollTop;
        const scrollingDown = currentY > lastScrollY.current;

        if (topIsVisible && !scrollingDown) {
            handleRetreat()
        }

        lastScrollY.current = currentY;
    }, [topIsVisible, curArt]);
    // set height according to links
    useEffect(()=>{
        setVPHeight(formatHeight(getMainHeight()))
        setArtHeight(formatHeight(getArtHeight()))
    },[footer])
    // update footer according to elements visible in the viewport
    const handlePreviewEnter = () => {
        setFooter(footer.slice(1))
    }
    const handlePreviewExit = () => {
        setFooter(getFootArts(curArt))
    }
    return (
        <div className={style.body} onWheel={handleScroll}>
            <header>
                <Header arts={getHeadArts(curArt)}/>
            </header>
            <main style={{height: vpHeight}}>
            <NavItem art={curArt} heightX={style.xl}/>
            <Viewport
                cur={curArt} 
                vpHeight={vpHeight} 
                artHeight={artHeight}
                handlePreviewEnter={handlePreviewEnter}
                handlePreviewExit={handlePreviewExit}
                handleAdvance={handleAdvance}
                handleRetreat={handleRetreat}
                primaryRef={primaryRef}
                topRef={topRef}
                viewportRef={viewportRef}

                />
            </main>
            <footer>
                <Footer arts={footer}/>
            </footer>
        </div>
    )
}