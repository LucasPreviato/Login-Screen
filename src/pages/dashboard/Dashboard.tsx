import { ListingTools } from "../../shared/components"
import { LayoutBasePages } from "../../shared/layouts"



export const Dashboard = () => {
    return (
        <LayoutBasePages 
        titulo="pagina-inicial"
         toolbar={(
            <ListingTools showInputSearch />
        )}>
          
        </LayoutBasePages>
    )
}