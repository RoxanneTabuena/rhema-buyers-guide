import { titleSequence} from "./content/articleDir"
// title utils
export const getArtFromPath = (path) => {
    return path.slice(1)
}
let titles = Object.keys(titleSequence)
export const getHeadArts = (art) => {
    let index = titles.findIndex(article=> article === art)
    return titles.slice(0,index)
}

export const getFootArts = (art) => {
    let index = titles.findIndex(article=> article === art)+1
    if(index > titles.length){
        return false
    }
    return titles.slice(index)
}

export const getNextArt = (art) => {
    let index = titles.findIndex(article=> article === art)+1
    if(index >= titles.length){
        return titles[titles.length-1]
    }
    return titles[index]
}
export const getPrevArt = (art) => {
    let index = titles.findIndex(article=> article === art)-1
    if(index <= 0){
        return ''
    }
    return titles[index]
}

// height utils
export const returnXL = (sizeTag) => {
    return sizeTag.includes('xl')
}

export const getLinkHeight = () => {
    let link = document.querySelector('.xl')
    if(!link){
        return false
    }
    return link.offsetHeight
}
export const getMainHeight = () => {
    let total = window.innerHeight
    let linkTotal = 0
    let navItems = document.querySelectorAll('.link')
    Array.from(navItems).forEach(item=>{
        linkTotal += item.offsetHeight
    })
    return total-linkTotal+getLinkHeight()
}

export const getArtHeight = () => {
    return getMainHeight()-getLinkHeight()
}

export const formatHeight = (height) => {
    return `${height}px`
}

