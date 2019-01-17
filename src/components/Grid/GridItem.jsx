import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    padding: "0 15px !important"
  },
  gridItem: {
    display: 'flex',
    alignItems: 'flex-end'
  }
};

function GridItem({ ...props }) {
  const { classes, children, ...rest } = props;
  console.log(props)
  return (
    <Grid item {...rest} className={classes.grid + " " + classes.gridItem}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
