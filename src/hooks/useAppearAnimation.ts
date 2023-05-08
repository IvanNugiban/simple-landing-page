import {RefObject, useEffect, useState} from "react";


const useAppearAnimation = (observableElement: RefObject<HTMLElement>) => {

    const [isIntersecting , setIntersectingState] = useState(false);

    useEffect(() => {
        if (!observableElement.current) return;


        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersectingState(entry.isIntersecting);
                if (entry.isIntersecting) observer.disconnect();
            },
            {rootMargin: "-100px"}
        );

        observer.observe(observableElement.current);
        return () => observer.disconnect();
    }, [observableElement])
    
    useEffect(() => {

        if (!observableElement.current) return;

        if (isIntersecting) {
            observableElement.current.classList.add("slide-in");
            observableElement.current.classList.remove("slide-out");
        }

        else  {
            observableElement.current.classList.add("slide-out");
            observableElement.current.classList.remove("slide-in");
        }
    }, [isIntersecting, observableElement])

}

export default useAppearAnimation;