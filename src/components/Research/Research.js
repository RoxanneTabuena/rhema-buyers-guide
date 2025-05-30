import { useState, useEffect } from 'react'
import { Competitor } from './Competetitor'
import style from './research.module.css'
import { competition_dic } from './content'
import { keyFromStr, getArtHeight, formatHeight } from '../utils'
export const Research = () => {
    const [height, setHeight] = useState(null)
    const comps = Object.keys(competition_dic)
    useEffect(()=>{
        setHeight(formatHeight(getArtHeight()*comps.length))
    },[])
    return (
        <div className={style.research} style={{minHeight: height}}>
           { comps.map((comp, i)=>{
            return <Competitor key={keyFromStr(comp, i)} name={comp} info={competition_dic[comp]} />
           })}
        </div>
    )
}