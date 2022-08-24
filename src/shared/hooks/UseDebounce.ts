import { useCallback } from "react";


export const useDebounce = () => {

    const debounce = useCallback(( func:()=> void) =>{

        setTimeout(() => {
            func();
        },300);
    }, []);
    return {
        debounce
    };
}