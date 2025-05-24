import style from './map.module.css'
import { url } from './map.content'
export const Map = () => {
    return (
        <div className={style.map}>
            <iframe src={url} title="description"></iframe>
        </div>
    )
}