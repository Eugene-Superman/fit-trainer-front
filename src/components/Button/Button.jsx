import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundImage: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
    color: '#fff',
    textTarnsform: 'uppercase'
  },
  input: {
    display: 'none',
  },
});

function ButtonComponent(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button} onClick={props.onClick}>
        {props.buttonLabel}
      </Button>
    </div>
  );
}

ButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonComponent);