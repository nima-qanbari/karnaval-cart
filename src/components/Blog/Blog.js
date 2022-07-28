import { Grid, Typography } from "@material-ui/core";
import React from "react";
import BlogCart from "../Card/BlogCart";
import { makeStyles } from "@material-ui/styles";

const Blog = ({ title, subtitle, data }) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h2" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </div>
      <Grid container spacing={1}>
        {data.map((item, index) => {
          return (
            <Grid item key={index} xs={12} md={item.md}>
              <BlogCart
                label={item.label}
                subtitle={item.subtitle}
                image={item.img}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 22,
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    lineHeight: 1.5,

    [theme.breakpoints.down("sm")]: {
      fontSize: 19,
    },
  },

  subtitle: {
    fontSize: 16,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
}));

export default Blog;
