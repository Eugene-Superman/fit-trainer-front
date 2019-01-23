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
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = { selectName: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.updateData(event.target.value);
  };

  render() {
    const { classes, selectFor, arrayForSelect } = this.props;
    const {selectName} = this.state;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={selectFor + "helper"}>{selectFor}</InputLabel>
          <Select
            value={selectName}
            onChange={this.handleChange}
            input={<Input name="selectName" id={selectFor + "helper"} />}
          >
            {arrayForSelect.map((element, index) => (
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

export default withStyles(styles)(SimpleSelect);
