import React from "react";
import { connect } from "react-redux";
import { editExercises } from "redux/actions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { cloneDeep } from "lodash";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from "components/Button/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import EditButtons from "components/EditButtons/EditButtons.jsx";
import SelectItem from "components/Select/Select.jsx";

import { WEIGHT_MEASUREMENTS } from "constants/constants";

const styles = {
  divContainer: {
    borderBottom: "1px solid silver",
    marginBottom: "20px",
    paddingBottom: "20px"
  }
};

class EditExercises extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = { changeableExercises: [] };

  componentDidMount = () => {
    this.setState({ changeableExercises: cloneDeep(this.props.exercises) });
  };

  /*INPUTS*/
  selectUpdate = index => val => {
    const elementToChange = cloneDeep(this.state.changeableExercises);
    elementToChange[index].measurementType = WEIGHT_MEASUREMENTS[val];
    this.setState({ changeableExercises: elementToChange });
  };

  changeInput = index => event => {
    const elementToChange = cloneDeep(this.state.changeableExercises);
    elementToChange[index].exerciseName = event.target.value;
    this.setState({ changeableExercises: elementToChange });
  };
  /*END OF INPUT HANDLERS*/

  /*BUTTON HANDLERS*/
  moveExerciseUp = index => {
    if (index) {
      const elementToChange = cloneDeep(this.state.changeableExercises);
      [elementToChange[index - 1], elementToChange[index]] = [
        elementToChange[index],
        elementToChange[index - 1]
      ];
      this.setState({ changeableExercises: elementToChange });
    }
  };

  moveExerciseDown = index => {
    const elementToChange = cloneDeep(this.state.changeableExercises);
    if (index < elementToChange.length - 1) {
      [elementToChange[index + 1], elementToChange[index]] = [
        elementToChange[index],
        elementToChange[index + 1]
      ];
      this.setState({ changeableExercises: elementToChange });
    }
  };

  removeExercise = index => {
    const elementToChange = cloneDeep(this.state.changeableExercises);
    elementToChange.splice(index, 1);
    this.setState({ changeableExercises: elementToChange });
  };

  /*END OF BUTTON HANDLERS*/

  render() {
    const { classes } = this.props;
    const { changeableExercises } = this.state;

    return (
      <div>
        <Card>
          <CardHeader color="primary">
            <h4>Edit exercises</h4>
          </CardHeader>
          <CardBody>
            {changeableExercises.map((element, index) => {
              return (
                <div key={index} className={classes.divContainer}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        inputValue={element.exerciseName}
                        onChange={this.changeInput(index)}
                        labelText="Exercise name"
                        id="username"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <SelectItem
                        updateData={this.selectUpdate(index)}
                        selectHeader="Measurement type"
                        arrayForSelect={WEIGHT_MEASUREMENTS}
                        selectFor="measure"
                        selectedItem={element.measurementType}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <EditButtons
                        buttonUp={() => this.moveExerciseUp(index)}
                        buttonDown={() => this.moveExerciseDown(index)}
                        removeExercise={() => this.removeExercise(index)}
                      />
                    </GridItem>
                  </GridContainer>
                </div>
              );
            })}
            <ButtonComponent
              buttonLabel="update exercises"
              onClick={() => this.props.editExercises(changeableExercises)}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.allExercises
});

const mapDispatchToProps = {
  editExercises
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditExercises));
