import React from "react";

import { connect } from "react-redux";
import { addWorkout } from "../../redux/actions";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from "components/Button/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import EditButtons from "components/EditButtons/EditButtons.jsx";
import SelectItem from "components/Select/Select.jsx";
//import WorkoutDataRow from "components/WorkoutDataRow/WorkoutDataRow.jsx";

class NewWorkout extends React.Component {
  state = {
    exercises: [],
    allWorkouts: [],
    workout: [{ workoutExercise: "", repeats: 0, measurement: "" }],
    exercisesName: [],
    exerciseIndex: null,
    workEx: ""
  };

  componentDidMount = () => {
    this.setState({ exercises: this.props.exercises });
    const names = [];
    this.props.exercises.map(el => {
      names.push(el);
    });
    this.setState({ exercisesName: names });
    this.setState({ allWorkouts: this.props.allWorkouts });
  };

  handleSelect = value => {
    this.setState({ exerciseIndex: value });
  };

  render() {
    const exercises = this.state.exercises;
    const exercisesName = this.state.exercisesName;
    const workout = this.state.workout;

    console.log('exercisesName', exercisesName)

    return (
      <div>
        <Card>
          <CardHeader color="primary">
            <h4>New workout</h4>
          </CardHeader>
          <CardBody>
            <ButtonComponent buttonLabel="add exercise" />
            {workout.map((element, index) => {
              return (
                <GridContainer key={index}>
                  <GridItem xs={12} sm={12} md={3}>
                    <SelectItem
                      updateData={this.handleSelect}
                      selectHeader="Exercise name"
                      measurements={exercisesName}
                      selectFor={element.index}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      inputValue={element.repeats}
                      labelText="Repeats"
                      id="repeatss"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      inputValue={element.measurement}
                      labelText="Measurement"
                      id="measurement"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    {/* {zaglushka} */}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <EditButtons />
                  </GridItem>
                </GridContainer>
              );
            })}
            <ButtonComponent buttonLabel="create workout" />
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.allExercises,
  workouts: state.allWorkouts
});

const mapDispatchToProps = {
  addWorkout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWorkout);
