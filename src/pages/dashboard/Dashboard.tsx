import { Toolbar } from "../../shared/components"
import { LayoutBasePages } from "../../shared/layouts"



export const Dashboard = () => {
    return (
        <LayoutBasePages titulo="pagina-inicial" barraDeFerramentas={(
            <Toolbar />
        )}>
          
        </LayoutBasePages>
    )
}