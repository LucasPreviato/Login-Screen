import { useTheme, Drawer, Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { useDrawerContext } from '../../context'

interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down("sm"))
  const {isDrawerOpen , toggleDrawerOpen} = useDrawerContext()
  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? "temporary" :"persistent"} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
        <Box width="100%"height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
        <Avatar 
        sx={{height: theme.spacing(12), width: theme.spacing(12)}}
        src="/static/images/avatar/1.jpg" />
        </Box>
        <Divider />

        <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </List>
        </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
