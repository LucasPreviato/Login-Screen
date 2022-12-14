import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../context";

interface ILayoutBasePagesProps {
    children: React.ReactNode;
    titulo : string;
    toolbar?: React.ReactNode;
}   

export const LayoutBasePages : React.FC<ILayoutBasePagesProps> = ({children, titulo, toolbar: barraDeFerramentas}) => {
    const smDown = useMediaQuery((theme : Theme) => theme.breakpoints.down("sm"))
    const mdDown = useMediaQuery((theme : Theme) => theme.breakpoints.down("md"))

    const theme = useTheme()

    const {toggleDrawerOpen} = useDrawerContext()
    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box display="flex" gap={1} alignItems="center" padding={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
              { smDown && (<IconButton onClick={toggleDrawerOpen}>
                   <Icon>menu</Icon>
                </IconButton>)}
                
                <Typography variant={smDown ? "h5" : mdDown ? "h4" : "h3"} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
            {titulo}
                </Typography>
            </Box>
           {barraDeFerramentas && (<Box>
                {barraDeFerramentas}
            </Box>)}
            <Box flex={1} overflow="auto">
            {children}
            </Box>
        </Box>

    );
}