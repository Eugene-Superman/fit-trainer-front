import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component {
  state = { selectedIndex: "" };

  handleChange = event => {
    const result = event.target.value;
    this.setState({ selectedIndex: result });
    this.props.updateData(result);
  };

  render() {
    const { classes, selectFor, arrayForSelect, selectedItem } = this.props;
    const { selectedIndex } = this.state;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={selectFor + "-select"}>{selectFor}</InputLabel>
          <Select
            value={
              typeof selectedItem === "string"
                ? arrayForSelect.indexOf(selectedItem)
                : typeof selectedItem === "number"
                ? selectedItem
                : selectedIndex
            }
            onChange={this.handleChange}
            inputProps={{
              name: selectFor,
              id: "select-for" + selectFor
            }}
          >
            {arrayForSelect.map((element, index) => (
              <MenuItem key={index} value={index}>
                {typeof element === "object" ? element.exerciseName : element}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  selectFor: PropTypes.string,
  arrayForSelect: PropTypes.array,
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  updateData: PropTypes.func
};

export default withStyles(styles)(SimpleSelect);
