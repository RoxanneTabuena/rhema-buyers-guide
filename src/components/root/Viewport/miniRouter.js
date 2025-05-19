import { Article } from "../../Article/Article";
import { Research } from "../../Research/Research";
import { Map } from "../../Map/Map";
import { Timeline } from "../../Timeline/Timeline";

export const miniRouter = {
    'mission' : <Article art={'mission'}/>,
    'market-research': <Research/>,
    'proposal': <Article art={'proposal'}/>,
    'map' : <Map />,
    'inventory' : <Article art={'inventory'}/>,
    'themes' : <Article art={'themes'}/>,
    'logos' : <Article art={'logos'}/>,
    'graphics': <Article art={'graphics'}/>,
    'scope': <Article art={'scope'}/>,
    'maintenance': <Article art={'maintenance'}/>,
    'timeline': <Timeline/>
}