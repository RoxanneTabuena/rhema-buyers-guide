import { useState, useEffect, useRef, useCallback } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useObserver } from '../../hooks/useObserver'
import { Header } from "./Header";
import { Footer } from "./Footer";
import { 
        getHeadArts, 
        getFootArts, 
        getArtFromPath, 
        getMainHeight, 
        getArtHeight,
        getNextArt,
        getPrevArt } from "../utils";
import { NavItem } from "./NavItem";
import style from './root.module.css'
import { Viewport } from "./Viewport/Viewport";

export const Root = () => {
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
    const [ curArt, setCurArt ] = useState('intro')
    const [ vpHeight, setVPHeight] = useState('200px')
    const [ artHeight, setArtHeight] = useState('200px')
    const [footer, setFooter] = useState(getFootArts(curArt))
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const canNavigate = useRef(true)
    const lastScrollY = useRef(0);
    // update article and footer according to pathname
    useEffect(()=>{
        const nextArt = pathname === '/' ? 'intro' : getArtFromPath(pathname);
        setCurArt(nextArt);
        setFooter(getFootArts(nextArt));
    }, [pathname])
    // advance route at end of component
    useEffect(()=>{
        if(primaryArticle){
        // start reading when main article comes into view
            setReading(true)
        }else{
        // advance article if article exits view during reading
            if(reading){
                setReading(false)
                handleAdvance()
            }
        }
    },[primaryArticle, reading])

    // retreat route when user scrolls past top
    const handleScroll = useCallback(() => {
        const node = viewportRef.current;
        if (!node) return;

        const currentY = node.scrollTop;
        const scrollingDown = currentY > lastScrollY.current;

        if (isAtTop && !scrollingDown) {
            handleRetreat()
        }

        lastScrollY.current = currentY;
    }, [isAtTop, curArt]);
    // set height according to links
    useEffect(()=>{
        setVPHeight(getMainHeight())
        setArtHeight(getArtHeight())
    },[footer])
    // update footer according to elements visible in the viewport
    const handlePreviewEnter = () => {
        setFooter(footer.slice(1))
    }
    const handlePreviewExit = () => {
        setFooter(getFootArts(curArt))
    }
    // throttle actions
    const throttle = (callback) => {
    if (!canNavigate.current) return;
    canNavigate.current = false;

    callback();

    setTimeout(() => {
      canNavigate.current = true;
    }, 200); // 1 second throttle
  };
    // advance route on article complete
    const handleAdvance = useCallback(() => {
        throttle(()=>{
            console.log('advance')
            navigate(`/${getNextArt(curArt)}`, { state: { preserveScroll: false } });
        })
    }, [curArt, navigate]);

    // retreat route on scroll up
    const handleRetreat = useCallback(() => {
        throttle(()=>{
            console.log('retreat')
            navigate(`/${getPrevArt(curArt)}`, { state: { preserveScroll: true } });
        })
    }, [curArt, navigate]);
    return (
        <div className={style.body} onWheel={handleScroll}>
            <header>
                <Header arts={getHeadArts(curArt)}/>
            </header>
            <main style={{height: vpHeight}}>
            <NavItem art={curArt}/>
            <Viewport
                cur={curArt} 
                vpHeight={vpHeight} 
                artHeight={artHeight}
                handlePreviewEnter={handlePreviewEnter}
                handlePreviewExit={handlePreviewExit}
                handleAdvance={handleAdvance}
                handleRetreat={handleRetreat}
                primaryArticleRef={primaryArticleRef}
                primaryArticle={primaryArticle}
                startRef={startRef}
                isAtTop={isAtTop}
                viewportRef={viewportRef}

                />
            </main>
            <footer>
                <Footer arts={footer}/>
            </footer>
        </div>
    )
}