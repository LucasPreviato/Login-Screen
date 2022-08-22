import React from "react";
import { ListingTools } from "../../shared/components";
import { LayoutBasePages } from "../../shared/layouts";


export const ListingCity: React.FC = () => {

    return (
        <LayoutBasePages titulo="Listagem de Cidades"
        toolbar={<ListingTools 
        newTextButton="Nova"
        showInputSearch
        />}
        >

        </LayoutBasePages>
    )
}