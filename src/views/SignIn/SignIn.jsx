import React from "react";

import { connect } from "react-redux";
import { setUser } from "../../redux/actions";
import { Link } from 'react-router-dom'
import {isEqual} from "lodash";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from "../../components/Button/Button.jsx";

class SignIn extends React.Component {
  state = {userEmail: '', userPassword: ''};
  
  changedInput = event => {
    this.setState({[event.target.id]: event.target.value})
  }

  submitSignIn= userData => {
    this.props.users.forEach((element) => {
      if(isEqual(element, userData)) {
        this.props.setUser(userData.userEmail)
      }
    })
  }

  render() {
    const {userEmail, userPassword} = this.state
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
              <p>Login: admin</p>
              <p>Password: 1111</p>
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
                  onClick={() => this.submitSignIn({userEmail, userPassword})}
                  buttonLabel="sign in"
                />
                <p><Link to="/sign-up">first time user? sign-up</Link></p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.allUsers
});

const mapDispatchToProps = {
  setUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
