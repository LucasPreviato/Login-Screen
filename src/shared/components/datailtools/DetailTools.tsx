import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material"

interface IDetailToolsProps {
    textNewButton?: string;

    showNewButton?: boolean;
    showBackButton?: boolean;
    showDeleteButton?: boolean;
    showSaveButton?: boolean;
    showBackSaveButton?: boolean;

    clickNewButton? : () => void;
    clickBackButton? : () => void;
    clickDeleteButton? : () => void;
    clickSaveButton? : () => void;
    clickBackSaveButton? : () => void;

}

export const DetailTools : React.FC<IDetailToolsProps> = ({
    textNewButton,
     showNewButton ,
      showBackButton, 
      showBackSaveButton, 
      showDeleteButton, 
      showSaveButton,

      clickNewButton,
       clickBackButton,
        clickDeleteButton,
        clickSaveButton,
        clickBackSaveButton,
}) => {
    const theme = useTheme();
    return (
        <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      alignItems="center"
      display="flex"
      gap={1}
      component={Paper}>
        
        
        <Button
          color="primary"
          disableElevation
          variant="contained"
          startIcon={<Icon>save</Icon>}
        >Salvar
        </Button>
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>save</Icon>}
        >Salvar e voltar
        </Button>
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>delete</Icon>}
        >Apagar
        </Button>
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>add</Icon>}
        >Novo
        </Button>
        <Divider variant="middle" orientation="vertical"/>
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>arrow_back</Icon>}
        >voltar
        </Button>
      </Box>
    )
}