import { Competitor } from './Competetitor'
import { competition_dic } from './content'
import { keyFromStr } from '../utils'


export const Research = () => {
    const comps = Object.keys(competition_dic)
    return (
        <div>
           { comps.map((comp, i)=>{
            return <Competitor key={keyFromStr(comp, i)} name={comp} info={competition_dic[comp]} />
           })}
        </div>
    )
}