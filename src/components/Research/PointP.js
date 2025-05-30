import { useState} from 'react'
import style from './research.module.css'
export const PointP = ({ title, point}) => {
    const [ open, setOpen] = useState(false)
  return (
    <div className={style.pointContainer}
        onClick={()=>{setOpen(!open)}}
        aria-expanded={open}
        aria-label={open? 'collapse section': 'expand section'}
    >
        <div className={style.titleContainer}>
            <p className={style.title}>{title}</p>
            <button 
                onClick={()=>{setOpen(!open)}}
                aria-expanded={open}
                aria-label={open? 'collapse section': 'expand section'}>
            {!open && '...'}</button>
        </div>
        {open && 
        <p className={style.point}>{point}</p>
        }
    </div>

  )}