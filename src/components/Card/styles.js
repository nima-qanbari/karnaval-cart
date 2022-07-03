import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(
  (theme) => {
    return {
      paper: {
        position: "relative",
        padding: theme.spacing(1.5),
        "&:hover": {
          "& $line:after": {
            transform: "translateX(0)",
          },
          "& $circle1, $circle2": {
            background: theme.palette.primary.main,
          },
        },

        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(1.5, 1.5, 0),
        },
      },

      firstDiv: {
        position: "relative",
        padding: 8,
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
      details: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        margin: theme.spacing(0, 0, 1, 0),
      },

      imgContainer: {
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "50%",
        margin: "auto",
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        [theme.breakpoints.down("sm")]: {
          margin: theme.spacing(1, 0),
          width: 45,
          height: 45,
        },
      },

      img: {
        width: 35,
        height: 35,

        [theme.breakpoints.down("sm")]: {
          width: 27,
          height: 27,
        },
      },

      info: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
          display: "block",
          marginRight: theme.spacing(1),
        },

        "& p": {
          lineHeight: 2,
          fontSize: 11,
          fontWeight: 500,
        },
      },

      bold: {
        fontSize: 14,
        fontWeight: "bold",
      },

      buy: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: `3px dashed ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2, 0),

        [theme.breakpoints.down("sm")]: {
          flexDirection: "row",
          flexWrap: "wrap",
          padding: theme.spacing(2, 1),
          justifyContent: "space-between",
          alignItems: "center",
        },
      },

      price: {
        justifyContent: "flex-start",
        fontWeight: "bold",
      },

      mobilePrice: {
        fontSize: 14,
        fontWeight: 400,
        textAlign: "center",

        [theme.breakpoints.down("sm")]: {
          fontSize: 10,
        },
      },

      priceContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      detailContainerBreakpoints: {
        padding: 4,
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },

      alignment: {
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
          margin: "auto",
        },
      },

      lineContainer: {
        textAlign: "center",
        position: "relative",
      },

      dateDesktop: {
        margin: theme.spacing(1, 0),
        fontSize: 11,
        fontWeight: "bold",

        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },

      dateMobile: {
        margin: theme.spacing(1, 0),
        fontSize: 9,
        fontWeight: "bold",
        display: "none",

        [theme.breakpoints.down("sm")]: {
          display: "block",
        },
      },

      count: {
        width: "fit-content",
        border: `1px solid ${theme.palette.divider}`,
        fontSize: 11,
        margin: "auto",
        padding: theme.spacing(0.5),
        borderRadius: theme.shape.borderRadius,

        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },

      margin: {
        margin: theme.spacing(1),
      },

      grayFont: {
        fontSize: 12,
        color: theme.palette.text.secondary,

        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },

      desktopCounter: {
        textAlign: "center",
        fontSize: 12,
        color: theme.palette.text.secondary,

        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },

      mobileCounter: {
        fontSize: 11,
        textAlign: "center",
        color: theme.palette.text.secondary,
        display: "none",

        [theme.breakpoints.down("sm")]: {
          display: "block",
        },
      },

      circle1: {
        display: "flex",
        borderRadius: "50%",
        background: theme.palette.grey[400],
        width: "10px",
        height: "10px",
        position: "absolute",
        right: -1,
        top: -4,
        zIndex: 2,
        transition: `all ${theme.transitions.duration.shortest} ${theme.transitions.easing.easeInOut}  0ms`,
      },
      circle2: {
        display: "flex",
        borderRadius: "50%",
        background: theme.palette.grey[400],
        width: "10px",
        height: "10px",
        position: "absolute",
        left: -1,
        top: -4,
        zIndex: 2,
        transition: `all ${theme.transitions.duration.shortest} ${theme.transitions.easing.easeInOut}  0ms`,
      },

      line: {
        width: "100%",
        height: "2px",
        background: theme.palette.grey[400],
        position: "relative",
        overflow: "hidden",

        "&::after ": {
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          content: "''",
          transform: "translateX(100%)",
          backgroundColor: theme.palette.primary.main,
          transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },

      btn: {
        fontSize: 12,
        fontWeight: "bold",
        margin: theme.spacing(1, 0),

        [theme.breakpoints.down("sm")]: {
          margin: theme.spacing(0),
        },
      },
      bottom: {
        display: "flex",
        position: "absolute",
        right: 30,
        bottom: theme.spacing(-1.5),

        "& p": {
          display: "flex",
          alignItems: "center",
          fontSize: 11,
          color: theme.palette.text.secondary,
          marginLeft: theme.spacing(1),
          cursor: "pointer",
          userSelect: "none",
          padding: theme.spacing(0.5, 0),
        },

        "& SVG": {
          fontSize: 16,
        },

        [theme.breakpoints.down("sm")]: {
          position: "static",
          justifyContent: "space-around",
          margin: theme.spacing(2, 0, -1, 0),

          "& p": {
            justifyContent: "center",
            maxWidth: " 33.3%",
            flexBasis: " 33.3%",
          },
          "& p:not(:last-child)": {
            borderLeft: `1px solid ${theme.palette.divider}`,
          },
        },
      },

      direction: {
        direction: "ltr",
      },

      cancel: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      },

      dropdown: {
        marginTop: theme.spacing(3),
      },

      cancelDiv: {
        display: "flex",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "center",
        border: `2px dashed ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2, 4),
        width: "48%",

        [theme.breakpoints.down("sm")]: {
          width: "100%",
          marginTop: theme.spacing(1.5),
        },
      },

      informationDesktop: {
        [theme.breakpoints.down("sm")]: {
          display: "none !important",
        },
      },
      informationMobile: {
        display: " none !important",
        [theme.breakpoints.down("sm")]: {
          display: "flex !important",
        },
      },
      yellowText: {
        color: theme.palette.error.main,
        fontSize: 16,
        fontWeight: "bold",
        margin: theme.spacing(1, 0),
      },

      cancelText: {
        fontSize: 11,
        textAlign: "center",
        fontWeight: "bold",
        lineHeight: 1.5,
      },

      thTable: {
        fontSize: 11,
        fontWeight: "bold",
      },

      tdTable: {
        fontSize: 11,
        fontWeight: "bold",
      },

      cartBreakpoints: {},

      detailsBreakpoints: {
        alignContent: "center",
      },

      lineContainerBreakpoints: {
        [theme.breakpoints.down("sm")]: {
          borderTop: `1px solid ${theme.palette.divider}`,
          alignItems: "flex-end",
        },
      },

      loading1: {
        margin: "9.5px 0",
      },
    };
  },
  { index: 10 }
);
