import { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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
    const [ curArt, setCurArt ] = useState('intro')
    const [ vpHeight, setVPHeight] = useState('200px')
    const [ artHeight, setArtHeight] = useState('200px')
    const [footer, setFooter] = useState(getFootArts(curArt))
    const { pathname } = useLocation()
    const navigate = useNavigate()
    
// update article and footer according to pathname
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
// advance route on article complete
    const handleAdvance = () => {
        navigate(`/${getNextArt(curArt)}`,
        {state: {preserveScroll: false}})
    }
// retreat route on scroll up
    const handleRetreat = () => {
        let destination
        if(curArt==='intro'){
            return
        }
        else if(curArt=== 'mission'){
            destination = '/'
        }else{
            destination = `/${getPrevArt(curArt)}`
        }
        navigate(destination,
        {state: {preserveScroll: true}})
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
                handlePreviewExit={handlePreviewExit}
                handleAdvance={handleAdvance}
                handleRetreat={handleRetreat}
                />
            </main>
            <footer>
                <Footer arts={footer}/>
            </footer>
        </div>
    )
}