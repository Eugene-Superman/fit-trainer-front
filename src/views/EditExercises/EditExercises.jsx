import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from "components/Button/Button.jsx";
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

class EditExercises extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = { exercises: [], changeableExercises: [], copyMfucker: [], selectedMeasurement: "" };

  componentDidMount = () => {
    this.setState({ exercises: this.props.exercises });
    this.setState({ changeableExercises: Object.assign([], this.props.exercises)});
  };

  /*INPUTS*/
  selectUpdate = index => val => {
    const elementToChange = this.state.changeableExercises;
    elementToChange[index].measurementType = val;
    this.setState({ changeableExercises: elementToChange });
  };

  changeInput = index => event => {
    const elementToChange = this.state.changeableExercises;
    elementToChange[index].exerciseName = event.target.value;
    this.setState({ changeableExercises: elementToChange });
  };
  /*INPUTS*/
  //[a, b] = [b, a];
  /*BUTTON HANDLERS*/
  moveExerciseUp = index => {
    if (index) {
      const elementToChange = this.state.changeableExercises;
      [elementToChange[index - 1], elementToChange[index]] = [
        elementToChange[index],
        elementToChange[index - 1]
      ];
      this.setState({ changeableExercises: elementToChange });
    }
  };

  moveExerciseDown = index => {
      const elementToChange = this.state.changeableExercises;
      if(index < elementToChange.length-1) {
        [elementToChange[index + 1], elementToChange[index]] = [
          elementToChange[index],
          elementToChange[index + 1]
        ];
        this.setState({ changeableExercises: elementToChange });
      }
  };

  removeExercise = index => {
    const elementToChange = this.state.changeableExercises;
    elementToChange.splice(index, 1);
    this.setState({ changeableExercises: elementToChange });
  
  };

  updateChanges = () => {
    console.log(this.state.changeableExercises)
    this.setState({ exercises: this.state.changeableExercises})
    console.log('this.state.exersices', this.state.exercises)
  };

  /*BUTTON HANDLERS*/
  render() {
    const { classes } = this.props;
    const weightMeasurements = [
      { index: 0, label: "kg" },
      { index: 1, label: "lb" }
    ];
    const changedElements = this.state.changeableExercises;
    
    console.log('changedElements', changedElements)
    return (
      <div>
        <Card>
          <CardHeader color="primary">
            <h4>Edit exercises</h4>
          </CardHeader>
          <CardBody>
            {changedElements.map((element, index) => {
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
                        measurements={weightMeasurements}
                        selectFor={element.measurementType}
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
            <ButtonComponent buttonLabel="update exercises" onClick={this.updateChanges}/>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.allExercises
});

export default connect(mapStateToProps)(withStyles(styles)(EditExercises));
