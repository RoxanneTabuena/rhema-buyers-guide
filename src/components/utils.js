import { titleSequence} from "./content/articleDir"
export const getArtFromPath = (path) => {
    return path.slice(1)
}

export const getHeadArts = (art) => {
    let titles = Object.keys(titleSequence)
    let index = titles.findIndex(article=> article === art)
    return titles.slice(0,index)
}

export const getFootArts = (art) => {
    let titles = Object.keys(titleSequence)
    let index = titles.findIndex(article=> article === art)+2
    if(index > titles.length-1){
        return false
    }
    return titles.slice(index)
}

export const getNextArt = (art) => {
    let titles = Object.keys(titleSequence)
    let index = titles.findIndex(article=> article === art)+1
    if(index === titles.length){
        return false
    }
    return titles[index]
}
