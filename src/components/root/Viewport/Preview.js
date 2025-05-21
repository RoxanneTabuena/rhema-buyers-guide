import { useEffect } from 'react';
import { useObserver } from '../../../hooks/useObserver'; // adjust the path if needed
import { NavItem } from "../NavItem";
import { titleSequence } from "../../content/articleDir";
import { miniRouter } from "./miniRouter";
import { getNextArt, getLinkHeight} from "../../utils";
import style from './viewport.module.css'




export const Preview = ({cur, height, handlePreviewEnter, handlePreviewExit}) => {
    const next = getNextArt(cur)
    const linkHeight = !getLinkHeight() ? '5px' : getLinkHeight()
    const [ref, previewStart] = useObserver({
      threshold: 0.01,
      rootMargin: `-${linkHeight}`
    });
    
    useEffect(() => {
      if (previewStart) {
        handlePreviewEnter()
      } else {
        handlePreviewExit()
      }
    }, [previewStart]);
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

