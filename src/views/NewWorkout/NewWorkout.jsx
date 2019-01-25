import React from "react";

import { connect } from "react-redux";
import { addWorkout } from "../../redux/actions";
import { cloneDeep, size } from "lodash";
import { Redirect } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from "components/Button/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import EditButtons from "components/EditButtons/EditButtons.jsx";
import SelectItem from "components/Select/Select.jsx";

import { withRouter } from "react-router-dom";

class NewWorkout extends React.Component {
  state = {
    redirect: false,
    exercises: [],
    workouts: [{ exerciseId: "", repeats: "", measurementCount: "" }],
    exercisesIds: []
  };

  componentDidMount = () => {
    const { allWorkouts, exercises } = this.props;
    if (!this.props.location.state) {
      this.setState({ redirect: true });
    } else {
      const ids = [];
      exercises.map(el => {
        ids.push(el.exerciseId);
      });
      this.setState({ exercisesIds: ids, exercises: exercises });
      if (
        size(allWorkouts) > 0 &&
        allWorkouts[this.props.location.state.calendarDate]
      ) {
        this.setState({
          workouts: cloneDeep(
            allWorkouts[this.props.location.state.calendarDate]
          )
        });
      }
    }
  };

  handleSelect = index => value => {
    const elementToChange = cloneDeep(this.state.workouts);
    elementToChange[index].exerciseId = value;
    this.setState({ workouts: elementToChange });
  };

  changeNumberInput = (index, label) => event => {
    const elementToChange = cloneDeep(this.state.workouts);
    if ("repeats" === label) {
      elementToChange[index].repeats = event.target.value;
    } else if ("measurements" === label) {
      elementToChange[index].measurementCount = event.target.value;
    }
    this.setState({ workouts: elementToChange });
  };

  addExercise = () => {
    const workoutLength = this.state.workouts.length - 1;
    const workouts = this.state.workouts[workoutLength];
    const areIntputsFilled =
      workouts.exerciseId && workouts.repeats && workouts.measurementCount;
    if (areIntputsFilled) {
      const singleWorkout = {
        exerciseId: "",
        repeats: "",
        measurementCount: ""
      };
      const workoutsList = cloneDeep(this.state.workouts);
      workoutsList.push(singleWorkout);
      this.setState({ workouts: workoutsList });
    }
  };

  moveExerciseUp = index => {
    if (index) {
      const elementToChange = cloneDeep(this.state.workouts);
      [elementToChange[index - 1], elementToChange[index]] = [
        elementToChange[index],
        elementToChange[index - 1]
      ];
      this.setState({ workouts: elementToChange });
    }
  };

  moveExerciseDown = index => {
    const elementToChange = cloneDeep(this.state.workouts);
    if (index < elementToChange.length - 1) {
      [elementToChange[index + 1], elementToChange[index]] = [
        elementToChange[index],
        elementToChange[index + 1]
      ];
      this.setState({ workouts: elementToChange });
    }
  };

  removeExercise = index => {
    const elementToChange = cloneDeep(this.state.workouts);
    elementToChange.splice(index, 1);
    this.setState({ workouts: elementToChange });
  };

  createWorkout = () => {
    const workoutLength = this.state.workouts.length - 1;
    const workouts = this.state.workouts[workoutLength];
    if (
      (workouts.exerciseId || 0 === workouts.exerciseId) &&
      workouts.repeats &&
      workouts.measurementCount
    ) {
      this.props.addWorkout({
        [this.props.location.state.calendarDate]: this.state.workouts
      });
    }
  };

  render() {
    const { workouts, exercises, exercisesIds } = this.state;
    return (
      <div>
        {this.state.redirect ? <Redirect to="/target" /> : null}
        <Card>
          <CardHeader color="primary">
            <h4>New workout</h4>
          </CardHeader>
          <CardBody>
            <ButtonComponent
              buttonLabel="add exercise"
              onClick={this.addExercise}
            />
            {workouts.map((element, index) => {
              let exerciseIndex = exercises.findIndex(
                exerciseElement =>
                  exerciseElement.exerciseId === element.exerciseId
              );
              if(exercises[exerciseIndex])
              return (
                <GridContainer key={index}>
                  <GridItem xs={12} sm={12} md={3}>
                    <SelectItem
                      classes={{root: 'sad'}}
                      selectForWorkout
                      updateData={this.handleSelect(index)}
                      selectHeader="Exercise name"
                      arrayForSelect={exercises}
                      selectFor={exercises[exerciseIndex]? exercises[exerciseIndex].exerciseName: ""}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      onChange={this.changeNumberInput(index, "repeats")}
                      type="number"
                      inputValue={element.repeats ? element.repeats : ""}
                      labelText="Repeats"
                      id="repeats"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      onChange={this.changeNumberInput(index, "measurements")}
                      type="number"
                      inputValue={
                        element.measurementCount ? element.measurementCount : ""
                      }
                      labelText="Measurement"
                      id="measurement"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    {exercises[exerciseIndex]
                      ? exercises[exerciseIndex].measurementType
                      : ""}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <EditButtons
                      buttonUp={() => this.moveExerciseUp(index)}
                      buttonDown={() => this.moveExerciseDown(index)}
                      removeExercise={() => this.removeExercise(index)}
                    />
                  </GridItem>
                </GridContainer>
              );
            })}
            <ButtonComponent
              onClick={this.createWorkout}
              buttonLabel="create workout"
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.allExercises,
  allWorkouts: state.allWorkouts
});

const mapDispatchToProps = {
  addWorkout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewWorkout));
