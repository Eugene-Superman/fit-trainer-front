import React from "react";

import { connect } from "react-redux";
import { setUser } from "../../redux/actions";
import { Link } from "react-router-dom";
import { isEqual } from "lodash";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from "components/Button/Button.jsx";

const mapStateToProps = state => ({
  user: state.userInfo
});

const mapDispatchToProps = {
  setUser
};

class SignIn extends React.Component {
  state = { userEmail: "", userPassword: "" };

  changedInput = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  submitSignIn = userData => {
    if (isEqual(this.props.user, userData)) {
      this.props.setUser(userData.userEmail);
    }
  };

  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4>Sign into Fit Trainer App</h4>
                <p>Please, enter your email and password.</p>
              </CardHeader>
              <CardBody>
                <p>
                  Temporary user: <br />
                  Login: admin
                  <br /> Password: 1111
                </p>
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
                <ButtonComponent
                  onClick={() => this.submitSignIn({ userEmail, userPassword })}
                  buttonLabel="sign in"
                />
                <p>
                  <Link to="/sign-up">first time user? sign-up</Link>
                </p>
              </CardBody>
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
)(SignIn);
