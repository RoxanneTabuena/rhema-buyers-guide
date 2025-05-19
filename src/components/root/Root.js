import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { getHeadArts, getFootArts, getArtFromPath } from "../utils";
import { NavItem } from "./NavItem";
import style from './root.module.css'
import { Viewport } from "./Viewport/Viewport";

export const Root = () => {
    const [ curArt, setCurArt ] = useState('intro')
    const { pathname } = useLocation()

    useEffect(()=>{
        if(pathname === '/'){
            setCurArt('intro')
        }else{
            setCurArt(getArtFromPath(pathname))
        }
    }, [pathname])
    return (
        <div className={style.body}>
            <header>
                <Header arts={getHeadArts(curArt)}/>
            </header>
            <main>
            <NavItem art={curArt}/>
            <Viewport cur={curArt}/>
            </main>
            <footer>
                <Footer arts={getFootArts(curArt)}/>
            </footer>
        </div>
    )
}