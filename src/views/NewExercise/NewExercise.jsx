import React from "react";

import { connect } from "react-redux";
import { addExercise } from "../../redux/actions";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import SelectItem from "../../components/Select/Select.jsx";
import ButtonComponent from "../../components/Button/Button.jsx";
import SubmitNotification from "components/SubmitNotification/SubmitNotification";
import { WEIGHT_MEASUREMENTS } from "constants/constants";

class NewExercise extends React.Component {
  state = { exerciseName: "", measurementType: "" };

  setExerciseName = event => {
    this.setState({ exerciseName: event.target.value });
  };

  handleSelect = value => {
    this.setState({ measurementType: WEIGHT_MEASUREMENTS[value] });
  };

  submitExercise = () => {
    if (this.state.exerciseName && this.state.measurementType) {
      this.props.addExercise(this.state);
    }
  };

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4>Create new exercise</h4>
                <p>Please, add a new exercise name and measurement type</p>
              </CardHeader>
              <CardBody>
                <CustomInput
                  onChange={this.setExerciseName}
                  labelText="Username"
                  id="username"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <SelectItem
                  selectHeader="Measurement type"
                  arrayForSelect={WEIGHT_MEASUREMENTS}
                  updateData={this.handleSelect}
                />
                <ButtonComponent
                  onClick={this.submitExercise}
                  buttonLabel="create exercise"
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addExercise
};

export default connect(
  null,
  mapDispatchToProps
)(NewExercise);
