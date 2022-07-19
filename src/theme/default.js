import { createTheme } from "@material-ui/core";
import "../font/dana.css";

let theme = createTheme({
  direction: "rtl",

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: "#ff6161",
      main: "#ff6161",
      dark: "#ff6161",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 30,
  },
  typography: {
    fontFamily: "dana",
    fontSize: 12,
    h6: {
      fontSize: 12,
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
      fontSize: 16,
    },
  },
});

theme = {
  ...theme,
  props: {
    MuiCheckbox: {
      color: "primary",
    },
    MuiRadio: {
      color: "primary",
    },
    // MuiPaper: {
    //     elevation: 1,
    // },
    MuiTypography: {
      variant: "body2",
    },
    MuiTooltip: {
      enterTouchDelay: 0,
      leaveTouchDelay: 2500,
    },
    MuiButton: {
      disableRipple: true,
    },
    MuiIconButton: {
      disableRipple: true,
    },
    MuiMenu: {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    },
    MuiList: {
      disablePadding: true,
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        backgroundColor: "#fff",
      },
    },
    MuiMenu: {
      paper: {
        border: `2px solid ${theme.palette.divider2}`,
        marginTop: theme.spacing(0.5),
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: 36,
        fontSize: 12,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
    },
    MuiTab: {
      textColorInherit: {
        opacity: 1,
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: -6,
        marginRight: 0,
      },
    },
    MuiRadio: {
      root: {
        padding: 4,
      },
    },
    MuiCheckbox: {
      root: {
        padding: "0 4px",
      },
    },
    MuiFab: {
      root: {
        boxShadow: theme.shadows[1],
      },
      primary: {
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          boxShadow: theme.shadows[3],
        },
      },
    },
    MuiDialogActions: {
      root: {
        margin: 0,
        padding: "8px 4px",
        borderTop: "1px solid #bbb",
      },
    },
    MuiDialogTitle: {
      root: {
        borderBottom: "1px solid #bbb",
        "& h2": {
          fontSize: 16,
        },
      },
    },
    MuiTableCell: {
      root: {
        textAlign: "center",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: theme.shape.borderRadius,
        overflow: "hidden",
      },
      elevation1: {
        border: `1px solid ${theme.palette.divider2}`,
      },
      elevation2: {
        border: `1px solid ${theme.palette.divider}`,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: theme.typography.fontSize,
      },
      tooltipPlacementTop: {
        margin: `${theme.spacing(1, 0)} !important`,
      },
      tooltipPlacementBottom: {
        margin: `${theme.spacing(1, 0)} !important`,
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: `translate(23px, -6px) scale(0.75) !important`,
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "inherit",
        },
      },
      outlined: {
        "&:focus": {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
    PrivateNotchedOutline: {
      root: {
        paddingLeft: 18,
      },
      legend: {
        marginLeft: 10,
      },
    },
    MuiBreadcrumbs: {
      separator: {
        marginLeft: 4,
        marginRight: 4,
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: theme.spacing(1.5),
        marginBottom: 0,
      },
    },
    MuiInputBase: {
      root: {
        "& textarea": {
          fontSize: 12,
          lineHeight: "24px",
        },
      },
    },
    MuiButton: {
      contained: {
        border: `1px solid ${theme.palette.divider2}`,
      },
    },
    MuiSwitch: {
      switchBase: {
        color: theme.palette.grey[200],
      },
    },
  },
};

export { theme };
