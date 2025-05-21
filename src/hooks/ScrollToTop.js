import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToTop = (ref) => {
    const { pathname, state } =  useLocation()
    
    useEffect(() => {
        if (ref?.current) {
            const skipScroll = state?.preserveScroll;
            if(!skipScroll){
                ref.current.scrollTo({ top: 0, behavior: 'instant' })
            }
        }
    }, [ref, pathname])
}