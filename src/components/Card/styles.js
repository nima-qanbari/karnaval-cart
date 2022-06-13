import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => {
    console.log(theme);
    return {
      paper: {
        margin: theme.spacing(8, 0),
        position: "relative",
        padding: theme.spacing(1.5),
        "&:hover": {
          "& $line:after": {
            transform: "translateX(0)",
          },
          "& $circle1, $circle2": {
            background: "#ff6161",
          },
        },
      },


  
      imgContainer: {
        border: "1px solid #ccc",
        borderRadius: "50%",
        margin: "auto",
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
  
      img: {
        width: 35,
        height: 35,
      },
      details: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
  
      bold: {
        fontSize: 14,
        fontWeight: "bold",
      },
  
      buy: {
        border: `3px dashed ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2, 0),
        textAlign: "center",
      },
  
      alignment: {
        textAlign: "center",
      },
  
      lineContainer: {
        textAlign: "center",
        position: "relative",
      },
  
      date: {
        margin: theme.spacing(1),
        fontSize: 11,
        fontWeight: "bold",
      },
  
      count: {
        width: "fit-content",
        border: "1px solid #ccc",
        fontSize: 11,
        margin: "auto",
        padding: theme.spacing(0.5),
        borderRadius: theme.shape.borderRadius,
      },
  
      margin: {
        margin: theme.spacing(1),
      },
  
      grayFont: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.54)",
      },
  
      price: {
        fontWeight: "bold",
      },
  
      circle1: {
        display: "flex",
        borderRadius: "50%",
        background: "#ccc",
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
        background: "#ccc",
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
        background: "#ccc",
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
          backgroundColor: "#ff6161",
          transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
  
      btn: {
        margin: theme.spacing(1, 0),
      },
      bottom: {
        display: "flex",
        position: "relative",
        bottom: -8,
        right: 30,
        
  
        "& $p": {
          display: "flex",
          alignItems: "center",
          fontSize: 11,
          color: "rgba(0, 0, 0, 0.54)",
          marginLeft: theme.spacing(1),
          cursor: "pointer",
          userSelect: "none",
        },
  
        "& $SVG": {
          fontSize: 16,
        },
        
      },

      cancels: {
        display: "flex",
        justifyContent: "space-around",
      },

      dropdown: {
        margin: theme.spacing(2, 0) , 
      },

      cancelsDiv: {
        display: "flex",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "center",
        border: `2px dashed ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2, 4),
        width: "48%",
      },

      yellowText: {
        color: "#ff9800",
        fontSize:16,
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
        color: "rgba(0, 0, 0, 0.54)",
      },

      tdTable: {
        fontSize: 11,
        fontWeight: "bold",
      }



    };
  });