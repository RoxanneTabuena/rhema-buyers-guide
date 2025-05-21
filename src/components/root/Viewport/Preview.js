import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectObserver'; // adjust the path if needed
import { NavItem } from "../NavItem";
import { titleSequence } from "../../content/articleDir";
import { miniRouter } from "./miniRouter";
import { getNextArt} from "../../utils";
import style from './viewport.module.css'




export const Preview = ({cur, height, handlePreviewEnter, handlePreviewExit}) => {
    const next = getNextArt(cur)
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.01,
    });
    
    useEffect(() => {
      if (isIntersecting) {
        handlePreviewEnter()
      } else {
        handlePreviewExit()
      }
    }, [isIntersecting]);
    const t = (

        <div ref={ref} className={style.preview} style={{minHeight: height}}>
            <NavItem art={next}>
            <h2>{titleSequence[next]}</h2>
            </NavItem>
            {miniRouter[next]}
        </div>
    )
    return (
        <div>
            {t}
        </div>
    )
}

