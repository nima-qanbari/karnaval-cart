import "./App.css";
import   "./cssStyles/table.css"

import { makeStyles } from "@material-ui/styles";
import Travel from "./pages/Travel";


const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    max: {
      maxWidth:"1200px",
      margin: "0 auto",

      [theme.breakpoints.down("sm")]:{
        padding: theme.spacing(0, 2.5),
      }
    }
  };
});
function App() {
  const classes = useStyles()
  return(
  <div className={classes.max}>
      <Travel />
  </div>
  )
}

export default App;
