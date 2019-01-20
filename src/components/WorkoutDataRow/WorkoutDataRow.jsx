import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import EditButtons from "components/EditButtons/EditButtons.jsx";
import SelectItem from "components/Select/Select.jsx";

const styles = {
  divContainer: {
    borderBottom: "1px solid silver",
    marginBottom: "20px",
    paddingBottom: "20px"
  }
};

class WorkoutDataRow extends React.Component {
  static defaultProps = {
    exercises: []
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    exercises: PropTypes.array
  };

  render() {
    const { classes, exercises } = this.props;
    console.log("exercises", exercises);
    const exercisesList = ["zagl", "uska"];
    const zaglushka = "kg";
    return (
      <div className={classes.divContainer}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <SelectItem
              selectHeader="Exercise name"
              selectFor="measurement"
              selectItems={exercisesList}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Repeats"
              id="repeatss"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <CustomInput
              labelText="Measurement"
              id="measurement"
              formControlProps={{
                fullWidth: true
              }}
            />
            {zaglushka}
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <EditButtons />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.allExercises
});

export default connect(mapStateToProps)(withStyles(styles)(WorkoutDataRow));
