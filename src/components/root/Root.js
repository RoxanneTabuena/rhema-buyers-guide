import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { getHeadArts, getFootArts } from "../utils";
import { Article } from "../Article/Article";
import style from './root.module.css'

export const Root = () => {
    const [ curArt, setCurArt ] = useState('intro')
    const { pathname } = useLocation()
    return (
        <body>
            <header>
                <Header arts={getHeadArts(curArt)}/>
            </header>
            <main>
            {pathname === '/' ? 
                <Article art='intro'/> :
                <Outlet/>
            }
            </main>
            <footer>
                <Footer arts={getFootArts(curArt)}/>
            </footer>
        </body>
    )
}