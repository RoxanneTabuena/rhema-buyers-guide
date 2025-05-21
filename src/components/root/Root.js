import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { getHeadArts, getFootArts, getArtFromPath, getMainHeight, getArtHeight } from "../utils";
import { NavItem } from "./NavItem";
import style from './root.module.css'
import { Viewport } from "./Viewport/Viewport";

export const Root = () => {
    const [ curArt, setCurArt ] = useState('intro')
    const [ vpHeight, setVPHeight] = useState('200px')
    const [ artHeight, setArtHeight] = useState('200px')
    const [footer, setFooter] = useState(getFootArts(curArt))
    const { pathname } = useLocation()
    
// update article and footeraccording to pathname
    useEffect(()=>{
        if(pathname === '/'){
            setCurArt('intro')
        }else{
            setCurArt(getArtFromPath(pathname))
            setFooter(getFootArts(curArt))
        }
    }, [pathname, curArt])
// set height according to links
    useEffect(()=>{
        setVPHeight(getMainHeight())
        setArtHeight(getArtHeight())
    },[footer])
    useEffect(()=>{
        setVPHeight(getMainHeight())
    },[footer])
// update footer according to elements visible in the viewport
    const handlePreviewEnter = () => {
        setFooter(footer.slice(1))
    }
    const handlePreviewExit = () => {
        setFooter(getFootArts(curArt))
    }
    return (
        <div className={style.body}>
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
                handlePreviewExit={handlePreviewExit}/>
            </main>
            <footer>
                <Footer arts={footer}/>
            </footer>
        </div>
    )
}