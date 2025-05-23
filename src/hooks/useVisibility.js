import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

export function useVisibility(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [node, setNode] = useState(null);
  const {pathname} =useLocation()

  const refCallback = useCallback((el) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, options.root, options.rootMargin, options.threshold, pathname]);

  return [refCallback, isVisible];
}