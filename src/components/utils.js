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
    if(index === titles.length){
        return false
    }
    return titles[index]
}

// determine element height

export const getMainHeight = () => {
    let anchor = document.querySelector('a')
    if(anchor){
        let total = window.innerHeight
    let navItems = document.querySelectorAll('.link')
    let itemHeight = Array.from(navItems)[0].offsetHeight
    return `${total-[[navItems.length-1]*itemHeight]}px`
}

export const getArtHeight = () => {
    let total = window.innerHeight
    let navItems = document.querySelectorAll('.link')
    let itemHeight = Array.from(navItems)[0].offsetHeight
    return `${total-[[navItems.length+1]*itemHeight]}px`
}