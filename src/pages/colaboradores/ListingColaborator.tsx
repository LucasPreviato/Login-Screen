import { resourceUsage } from "process";
import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListingTools } from "../../shared/components";
import { LayoutBasePages } from "../../shared/layouts";

import {PessoasService} from "../../shared/services/api/pessoas/PessoasService"
export const ListingColaborator: React.FC = () => {

    const [searchParams, setSearchParams]= useSearchParams();

    const search = useMemo(()=> {
        return searchParams.get("busca" || "");
    },[searchParams]);

    useEffect(()=>{

        PessoasService.getAll()
        .then((result) =>{
            if(result instanceof Error){
                alert(result.message)
            }else {
                console.log(result);
            }
        })
        
    },[])

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