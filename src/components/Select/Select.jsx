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
  state = {};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.updateData(event.target.value);
  };

  render() {
    const { classes, selectFor, measurements } = this.props;

    console.log('this.props', this.props)

    let selectValue = "";

    if (selectFor) {
      selectValue = selectFor;
    } else if (this.state[selectFor]) {
      selectValue = this.state[selectFor];
    }

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={selectFor + "helper"}>
            {this.props.selectHeader}
          </InputLabel>
          <Select
            value={selectValue}
            onChange={this.handleChange}
            input={<Input name={selectFor} id={selectFor + "helper"} />}
          >
            {measurements.map(({ label, index }) => (
              <MenuItem key={index} value={label}>
                {label}
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
