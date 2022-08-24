import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListingTools } from "../../shared/components";
import { useDebounce } from "../../shared/hooks";
import { LayoutBasePages } from "../../shared/layouts";

import {PessoasService} from "../../shared/services/api/pessoas/PessoasService"
export const ListingColaborator: React.FC = () => {
    const {debounce}  = useDebounce()
    const [searchParams, setSearchParams]= useSearchParams();
   
    const search  = useMemo(()=> {
        return searchParams.get("search") ||"" ;
    },[searchParams]);

    useEffect(()=>{

        debounce(()=> {
            PessoasService.getAll(1,search)
            .then((result) =>{
                if(result instanceof Error){
                    alert(result.message)
                }else {
                    console.log(result);
                }
            })
        });

        
    },[search]);

    return (
        <LayoutBasePages titulo="Listagem de colaboradores"
        toolbar={<ListingTools 
        newTextButton="Nova"
        showInputSearch
        textSearch={search}
        changeTextSearch={text => setSearchParams({search : text},{replace : true}) }
        />}
        >

        </LayoutBasePages>
    )
}