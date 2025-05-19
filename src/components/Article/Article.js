import style from './article.module.css'
export const Article = ({art}) => {
    return (
        <article className={style.art}>
            <p>{art}</p>
        </article>
    )
}