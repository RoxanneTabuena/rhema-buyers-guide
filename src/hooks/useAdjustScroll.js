import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useAdjustScroll = (startRef, endRef) => {
    const { pathname, state } =  useLocation()
    
    useEffect(() => {
        if(state.preserveScroll === false && startRef.current){
        // scroll to top if jumping to route or entering from above
            setTimeout(() => {
            startRef.current?.scrollTo({ top: 0, behavior: 'instant' });
                }, 0);
        }else if(state.preserveScroll === true){
        // scroll to bottom if entering from below
            setTimeout(() => {
                startRef.current.scrollTo({ top:  endRef.current.offsetTop, behavior: 'instant' })
            }, 0);
        }
    }, [pathname, state, startRef, endRef])
}