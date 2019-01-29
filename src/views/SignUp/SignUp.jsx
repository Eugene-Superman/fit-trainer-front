import React from "react";

import { connect } from "react-redux";
import { setUser } from "../../redux/actions";
import { Link } from "react-router-dom";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from "components/Button/Button.jsx";

const mapStateToProps = state => ({
  users: state.userInfo
});

const mapDispatchToProps = {
  setUser
};

class SignUp extends React.Component {
  state = { isVerificationSent: false };

  changedInput = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  submitSignUp = userData => {
    this.setState({ isVerificationSent: true });
  };

  displayRegistrationForm = () => (
    <div>
      <CardHeader color="primary">
        <h4>Sign into Fit Trainer App</h4>
        <p>Please, enter your email and password</p>
      </CardHeader>
      <CardBody>
        <CustomInput
          onChange={this.changedInput}
          labelText="Email address"
          id="userEmail"
          formControlProps={{
            fullWidth: true
          }}
        />
        <CustomInput
          onChange={this.changedInput}
          labelText="Password"
          id="userPassword"
          type="password"
          formControlProps={{
            fullWidth: true
          }}
        />
        <CustomInput
          onChange={this.changedInput}
          labelText="Repeat password"
          id="repeatUserPassword"
          type="password"
          formControlProps={{
            fullWidth: true
          }}
        />
        <ButtonComponent onClick={this.submitSignUp} buttonLabel="sign up" />
        <p>
          <Link to="/sign-in">already have an account? sign-in</Link>
        </p>
      </CardBody>
    </div>
  );

  displayConfirmatioForm = () => (
    <div>
      <CardHeader color="primary">
        <h4>Email verification to finish registration with Fit Trainer App</h4>
        <p>Please, confirm your email address</p>
      </CardHeader>
      <CardBody>
        <CustomInput
          onChange={this.changedInput}
          labelText="Email address"
          id="userEmail"
          formControlProps={{
            fullWidth: true
          }}
        />
        <CustomInput
          onChange={this.changedInput}
          labelText="Verification Code"
          id="verificationCode"
          formControlProps={{
            fullWidth: true
          }}
        />
        <ButtonComponent
          onClick={this.submitSignUp}
          buttonLabel="verify email"
        />
        <p>
          <Link to="/sign-in">already have an account? sign-in</Link>
        </p>
      </CardBody>
    </div>
  );

  render() {
    const { isVerificationSent } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              {isVerificationSent
                ? this.displayConfirmatioForm()
                : this.displayRegistrationForm()}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
