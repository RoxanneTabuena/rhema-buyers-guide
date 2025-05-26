import { useEffect, useState } from 'react';
import { useVisibility } from '../../../hooks/useVisibility';
import { NavItem } from "../NavItem";
import { miniRouter } from "./miniRouter";
import { getNextArt} from "../../utils";

import style from '../root.module.css'

export const Preview = ({cur, height, handlePreviewEnter, handlePreviewExit}) => {
    const [ hideLink, setHideLink] = useState(false)
    const [previewLoaded, setPreviewLoaded] = useState( false)
    const next = getNextArt(cur)
    const [upperRef, upperIsVisible] = useVisibility({
      threshold: 1,
    });
    const [lowerRef, lowerIsVisible] = useVisibility({
      threshold: 1,
    });

    useEffect(()=>{
      if(!previewLoaded){
        if(upperIsVisible){
          handlePreviewEnter()
          setPreviewLoaded(true)
        }
      }else{
        if(!lowerIsVisible && upperIsVisible){
          setHideLink(true)
          handlePreviewExit()
        }else if(!lowerIsVisible&& !upperIsVisible){
          setPreviewLoaded(false)
          setHideLink(false)
        }else if(lowerIsVisible && hideLink){
          setHideLink(false)
        }
      }
    }, [upperIsVisible, lowerIsVisible])
    return (
        <div style={{minHeight: height}}>
                <h2 className={style.hidden}>turkey</h2>
            <div ref={upperRef} style={{ height: '1px' }} id="previewTitle"></div>
              <NavItem art={next} heightX={style.xl} hideLink={hideLink}>
              </NavItem>
            <div ref={lowerRef} style={{ height: '1px' }}></div>
            <div className={style.preview}>
            {miniRouter[next]}
            </div>
        </div>
    )
}

