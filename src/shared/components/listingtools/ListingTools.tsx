import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import { Environment } from "../../environment";

interface IToolbarProps {
  textSearch?: string | null;
  showInputSearch?: boolean;
  changeTextSearch?: (newText: string) => void;
  newTextButton?: string;
  showNewButton?: boolean;
  clickNewButton?: () => void;
}

export const ListingTools: React.FC<IToolbarProps> = ({
  textSearch = "",
  showInputSearch = false,
  changeTextSearch,
  newTextButton = "Novo",
  showNewButton = true ,
  clickNewButton,
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
      component={Paper}
    >
      {showInputSearch && (
        <TextField
          value={textSearch}
          onChange={(e) => changeTextSearch?.(e.target.value)}
          size="small"
          placeholder={Environment.SEARSH_INPUT}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
       {showNewButton &&( <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={clickNewButton}
          endIcon={<Icon>add</Icon>}
        >
          {newTextButton}
        </Button>)}
      </Box>
    </Box>
  );
};
