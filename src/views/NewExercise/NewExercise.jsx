import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import SelectItem from "../../components/Select/Select.jsx";
import ButtonComponent from "../../components/Button/Button.jsx";

import { connect } from "react-redux";
import { addExercise } from "../../redux/actions";

class NewExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseName: "",
      measurementType: ""
    };
    this.setExerciseName = this.setExerciseName.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.submitExercise = this.submitExercise.bind(this);
  }

  setExerciseName(event) {
    this.setState({ exerciseName: event.target.value });
  }

  handleSelect(value) {
    this.setState({ measurementType: value });
  }

  submitExercise() {
    if (this.state.exerciseName && this.state.measurementType) {
      this.props.addExercise(this.state);
    }
  }

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
                  measurements={[
                    { index: 0, label: "kg" },
                    { index: 1, label: "lb" }
                  ]}
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
