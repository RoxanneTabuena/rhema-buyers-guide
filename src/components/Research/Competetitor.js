import { useState, useEffect } from 'react' 
import style from './research.module.css'
import { mapPoints, getScrollHeight, formatHeight, getArtHeight, getHeadHeight } from '../utils'
export const Competitor = ({name, info}) => {
    const { src, href, good, bad} = info
    let titleStyle = style.titles
    const [headHeight, setHeadHight] = useState(null)
    const [artHeight, setArtHeight] = useState(null)
    const [scrollHeight, setScrollHeight] = useState(null)
    useEffect(()=>{
        setHeadHight(getHeadHeight())
        setArtHeight(formatHeight(getArtHeight()))
        setScrollHeight(formatHeight(getScrollHeight()))
    }, [])
    return (
            <article className={style.competitor} style={{height: artHeight}}>
                <figure className={`${style.comp_head} comp_head`}>
                    <figcaption>
                        <h4 className={style.titles}>{name}</h4>
                    </figcaption>
                    <a href={href} aria-label={`link to ${name}`} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={`${name} logo`}>
                        </img>
                    </a>
                </figure>
                <div style={{ maxHeight: scrollHeight, top: headHeight}} className={style.content}>
                    <section>
                        <h3 className={style.sect_head}>What We Can Learn</h3>
                        <div className={style.sect_cont}>
                            {mapPoints(good, titleStyle)}
                        </div>
                    </section>
                    <section>
                        <h3 className={style.sect_head}>How We Can Beat Them</h3>
                        {mapPoints(bad, titleStyle)}
                    </section>
                </div>
            </article>
    )
}