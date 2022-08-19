import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
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
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

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
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            Salvar
          </Typography>
        </Button>
      )}

      {showSaveButtonLoading && <Skeleton width={110} height={60} />}

      {showBackSaveButton && !showBackSaveButtonLoading && !smDown && !mdDown && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={clickBackSaveButton}
          startIcon={<Icon>save</Icon>}>
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            Salvar e voltar
          </Typography>
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
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            Apagar
          </Typography>
        </Button>
      )}

      {showDeleteButtonLoading && <Skeleton width={110} height={60} />}

      {showNewButton && !showNewButtonLoading && !smDown && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={clickNewButton}
          startIcon={<Icon>add</Icon>}>
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            {textNewButton}
          </Typography>
        </Button>
      )}

      {showNewButtonLoading && <Skeleton width={97} height={60} />}

      {showBackButton &&
        (showSaveButton ||
          showNewButton ||
          showDeleteButton ||
          showBackSaveButton) && (
          <Divider variant="middle" orientation="vertical" />
        )}
      {showBackButton && !showBackButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={clickBackButton}
          startIcon={<Icon>arrow_back</Icon>}>
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            voltar
          </Typography>
        </Button>
      )}
      {showBackButtonLoading && <Skeleton width={110} height={60} />}
    </Box>
  )
}
