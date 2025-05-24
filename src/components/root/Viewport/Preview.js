import { useEffect } from 'react';
import { useVisibility } from '../../../hooks/useVisibility';
import { NavItem } from "../NavItem";
import { titleSequence } from "../../content/articleDir";
import { miniRouter } from "./miniRouter";
import { getNextArt, getLinkHeight, formatHeight} from "../../utils";
import style from '../root.module.css'

export const Preview = ({cur, height, handlePreviewEnter, handlePreviewExit}) => {
    const next = getNextArt(cur)
    const linkHeight = !getLinkHeight() ? '5px' : formatHeight(getLinkHeight())
    const [previewRef, previewIsVisible] = useVisibility({
      threshold: .01,
      rootMargin: linkHeight
    });
  
    useEffect(() => {
      if (previewIsVisible) {
        handlePreviewEnter()
      } else {
        handlePreviewExit()
      }
    }, [previewIsVisible]);

    return (
        <div ref={previewRef} className={style.preview} style={{minHeight: height}}>
            <NavItem art={next} heightX={style.xl}>
            <h2>{titleSequence[next]}</h2>
            </NavItem>
            {miniRouter[next]}
        </div>
    )
}

