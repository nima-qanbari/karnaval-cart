import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  filter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  filterText: {
    fontSize: 13,
    fontWeight: "bold"
  },

  commonText: {
    fontSize: "0.75rem",
    fontWeight: 500,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 600,
  },

  checkboxContainer: {
    padding: theme.spacing(2),
    "& > div > div:first-child": {
        paddingBottom: theme.spacing(1)
    },
    "& >  div >  div:not(:first-child)": {
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(2, 0),
    },
  },

  checkbox: {
    margin: theme.spacing(0),
    "& svg": {
      fontSize: 20,
    },
  },
}));
