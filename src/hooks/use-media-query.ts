import { useState, useEffect } from "react";

const breakpoints = {
    xs: 480,
    ss: 620,
    sm: 768,
    md: 1060,
    lg: 1200,
    xl: 1700, 
} 

type MediaQueryProps  = keyof typeof breakpoints;

export const useMediaQuery = (query: MediaQueryProps) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${breakpoints[query]}px)`);
        if(media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}