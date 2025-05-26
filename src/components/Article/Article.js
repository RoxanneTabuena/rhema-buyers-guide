import style from './article.module.css'
import {maintenance} from '../content/maintenance'
export const Article = ({art}) => {
    const content_dir = {
        'maintenance': maintenance
    }
    return (
        <article className={style.art}>
            <p>{art}</p>
            {content_dir[art]&&
            <p>{content_dir[art].content}</p>
            }
        </article>
    )
}