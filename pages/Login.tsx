import React, { Component } from "react";

import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Router from "next/router";
import { withStyles } from "@material-ui/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInputLabel-root": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: ""
    },
    "& .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }
})(TextField);

class Login extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "",
      password: "",
      userNameError: "",
      passwordError: ""
    };
  } //end constructor

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }; //end change

  fetchLoginData() {
    axios
      .post(
        "https://users-service.api.converge-app.net/api/Users/authenticate",
        this.state
      )
      .then(response => {
        if (!response) {
          console.log("Response failed");
        } else {
          console.info("Login success", response);
          Router.push("/Dashboard");
        }
      })
      .catch(error => {
        console.log("failed", error);
      });
  }

  validate = () => {
    let isError = false;
    const errors = {
      userNameError: "",
      passwordError: ""
    };

    if (this.state.username === this.state.username) {
      isError = true;
      errors.userNameError = "sdss";
    }

    if (this.state.password === this.state.password) {
      isError = true;
      errors.passwordError = "Password eller brugernavn er ugyldigt";
    }
    if (this.state.password.length < 8) {
      isError = true;
      errors.passwordError = "Password er for kort";
    }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  Submithandler = e => {
    this.fetchLoginData();
    e.preventDefault();
    //console.log(this.state);
    const err = this.validate();
    const errors = {
      username: "",
      password: "",
      userNameError: "",
      passwordError: ""
    };

    if (!err && !errors) {
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastname: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        password: "",
        passwordError: ""
      });
    }
  };

  render() {
    return (
      <div>
        <div className="header">
          <Header></Header>
        </div>
        <Container component="main" maxWidth="xs">
          <div className="login">
            <Typography variant="h5">Login</Typography>
            <form>
              <div className="txtfield">
                <CssTextField
                  onChange={e => this.change(e)}
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Bruger navn"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  error={this.state.userNameError}
                />
                <CssTextField
                  onChange={e => this.change(e)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={this.state.passwordError}
                  helperText={this.state.passwordError}
                />
              </div>

              <Button
                variant="outlined"
                style={{
                  borderColor: "white",
                  background: "#000",
                  color: "white",
                  marginTop: 20
                }}
                type="submit"
                fullWidth
                color="primary"
                onClick={this.Submithandler}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="forgot_password" variant="body2">
                    Glemte password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="signup" variant="body2">
                    {"Har du ikke en konto? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>

            <style jsx>{`
              div.login {
                margin-top: 100px;
              }
            `}</style>
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;
