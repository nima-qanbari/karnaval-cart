import "./App.css";
import   "./cssStyles/table.css"

import { makeStyles } from "@material-ui/styles";
import Travel from "./pages/Travel";


const useStyles = makeStyles((theme) => {
  return {
    max: {
      maxWidth:"1200px",
      margin: "0 auto",
      marginTop: theme.spacing(8),

      [theme.breakpoints.down("sm")]:{
        padding: theme.spacing(0, 2.5),
      }
    }
  };
}, {flip: false});
function App() {
  const classes = useStyles()
  return(
  <div className={classes.max}>
      <Travel />
  </div>
  )
}

export default App;
