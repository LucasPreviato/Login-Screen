import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme,
} from '@mui/material'

interface IDetailToolsProps {
  textNewButton?: string

  showNewButton?: boolean
  showBackButton?: boolean
  showDeleteButton?: boolean
  showSaveButton?: boolean
  showBackSaveButton?: boolean

  showNewButtonLoading?: boolean
  showBackButtonLoading?: boolean
  showDeleteButtonLoading?: boolean
  showSaveButtonLoading?: boolean
  showBackSaveButtonLoading?: boolean

  clickNewButton?: () => void
  clickBackButton?: () => void
  clickDeleteButton?: () => void
  clickSaveButton?: () => void
  clickBackSaveButton?: () => void
}

export const DetailTools: React.FC<IDetailToolsProps> = ({
  textNewButton = 'Novo',

  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showBackSaveButton = false,

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,
  showBackSaveButtonLoading = false,

  clickSaveButton,
  clickBackSaveButton,
  clickDeleteButton,
  clickNewButton,
  clickBackButton,
}) => {
  const theme = useTheme()

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
      {showSaveButton && !showSaveButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={clickSaveButton}
          startIcon={<Icon>save</Icon>}>
          Salvar
        </Button>
      )}

      {showSaveButtonLoading && <Skeleton width={110} height={60} />}

      {showBackSaveButton && !showBackSaveButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={clickBackSaveButton}
          startIcon={<Icon>save</Icon>}>
          Salvar e voltar
        </Button>
      )}

      {showBackSaveButtonLoading && <Skeleton width={180} height={60} />}

      {showDeleteButton && !showDeleteButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={clickDeleteButton}
          startIcon={<Icon>delete</Icon>}>
          Apagar
        </Button>
      )}

      {showDeleteButtonLoading && <Skeleton width={110} height={60} />}

      {showNewButton && !showNewButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={clickNewButton}
          startIcon={<Icon>add</Icon>}>
          {textNewButton}
        </Button>
      )}

      {showNewButtonLoading && <Skeleton width={97} height={60} />}

      <Divider variant="middle" orientation="vertical" />
      {showBackButton && !showBackButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={clickBackButton}
          startIcon={<Icon>arrow_back</Icon>}>
          voltar
        </Button>
      )}
      {showBackButtonLoading && <Skeleton width={110} height={60} />}
    </Box>
  )
}
