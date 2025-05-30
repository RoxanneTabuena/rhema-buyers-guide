import { useState } from 'react'
import { PointP } from './PointP'
import style from './research.module.css'
import { keyFromStr } from '../utils'
export const Competitor = ({name, info}) => {
    const [open, setOpen] = useState(false)

    const { src, href, good, bad} = info
    const mapPoints=(infoArr)=>{
        return infoArr.map((point, i)=>{
            let txt = point.split(':')
            return (
                <PointP key={keyFromStr(txt[0],i)} title={txt[0]} point={txt[1]}/>
            )
        })
    }
    return (
            <article className={style.competitor} aria-label={`market report on ${name}`}>
                <a className={`${style.comp_head} comp_head`} 
                    href={href} 
                    aria-label={`link to ${name}`} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <img src={src} alt={`${name} logo`}>
                    </img>
                </a>
                <div>
                    <section>
                        <h3 >What We Can Learn From Them</h3>
                        <div>
                            {mapPoints(good)}
                        </div>
                    </section>
                    <section>
                        <h3>How We Can Beat Them</h3>
                        {mapPoints(bad)}
                    </section>
                </div>
            </article>
    )
}