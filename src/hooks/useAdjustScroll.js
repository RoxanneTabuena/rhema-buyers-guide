import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useAdjustScroll = (viewportRef, endRef) => {
    const { pathname, state } =  useLocation()
    
    useEffect(() => {
        if(state.preserveScroll === false && viewportRef.current){
        // scroll to top if jumping to route or entering from above
            setTimeout(() => {
            viewportRef.current?.scrollTo({ top: 0, behavior: 'instant' });
                }, 0);
        }else if(state.preserveScroll === true){
        // scroll to bottom if entering from below
            setTimeout(() => {
                viewportRef.current.scrollTo({ top:  endRef.current.offsetTop, behavior: 'instant' })
            }, 0);
        }
    }, [pathname, state, viewportRef, endRef])
}