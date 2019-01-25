import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 320
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = { selectName: "" };

  handleChange = event => {
    const result = this.props.selectForWorkout ? event.target.value.exerciseId: event.target.value;
    const selectedItem = this.props.selectForWorkout ? event.target.value.exerciseName:  event.target.value;
    this.setState({ [event.target.name]: selectedItem });
    this.props.updateData(result);
  };

  displayItems = arrayForSelect =>
    arrayForSelect.map((element, index) => (
      <MenuItem key={index} value={element}>
        {element}
      </MenuItem>
    ));

  displayForWorkout = exercises =>
    exercises.map((element, index) => (
      <MenuItem key={index} value={element}>
        {element.exerciseName}
      </MenuItem>
    ));

  render() {
    const { classes, selectFor, arrayForSelect, selectForWorkout } = this.props;
    const { selectName } = this.state;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={selectFor ? selectFor : selectName}
            onChange={this.handleChange}
            inputProps={{
              name: 'selectName',
              id: 'select-simple',
            }}
          >
            {selectForWorkout
              ? this.displayForWorkout(arrayForSelect)
              : this.displayItems(arrayForSelect)}
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(SimpleSelect);
