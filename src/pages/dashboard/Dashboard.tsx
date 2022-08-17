import { DetailTools,  } from "../../shared/components"
import { LayoutBasePages } from "../../shared/layouts"



export const Dashboard = () => {
    return (
        <LayoutBasePages 
        titulo="pagina-inicial"
         toolbar={(
            <DetailTools />
        )}>
          
        </LayoutBasePages>
    )
}