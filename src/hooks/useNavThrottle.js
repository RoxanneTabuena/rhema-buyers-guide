import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getNextArt, getPrevArt, getArtFromPath } from '../components/utils';

export const useNavThrottle = (delay) => {
  const navigate = useNavigate();
  const lastNavTime = useRef(0); 
  const {pathname } = useLocation()
  const curArt = pathname === '/' ? 'intro' : getArtFromPath(pathname)

  const throttle = (callback) => {
    const now = Date.now();
    if (now - lastNavTime.current < delay) return;
    lastNavTime.current = now;
    callback();
  };

  const handleAdvance = () =>
    throttle(() => {
      navigate(`/${getNextArt(curArt)}`, 
      {state: { preserveScroll: false },});
    });

  const handleRetreat = () =>
    throttle(() => {
      if (!curArt) return;
      const prev = getPrevArt(curArt);
      if(!prev && curArt !== 'mission') return;
      navigate(`/${prev}`, 
        {state: { preserveScroll: prev !== 'maintenance' },});

    });

  return { handleAdvance, handleRetreat };
};
