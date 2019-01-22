import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
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
    minWidth: 320
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component {
  state = {selectName:'', selectedIndex: null};

  componentDidMount = () => {
    //this.setState({ measurements: this.props.measurements });
  };

  handleChange = event => {
    this.setState({ selectedIndex: event.target.value});
    this.setState({ selectName: this.props.measurements[event.target.value]});
    this.props.updateData(event.target.value);
  };

  render() {
    const { classes, selectFor, measurements } = this.props;

    console.log('this.state.selectName', this.state.selectName)

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={selectFor + "helper"}>
            {this.props.selectHeader}
          </InputLabel>
          <Select
            value={this.state.selectName}
            onChange={this.handleChange}
            input={<Input name="selectName" id={selectFor + "helper"} />}
          >
            {measurements.map((element, index) => (
              <MenuItem key={index} value={index}>
                {element}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
