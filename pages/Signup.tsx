import React from "react";
import Header from "../components/Header";
import { Grid, Button, Link, Container, Typography } from "@material-ui/core";
import axios from "axios";
import Router from "next/router";
import CssTextField from "../components/CssTextField-root-style";

class Signup extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstName: "",
      lastname: "",
      username: "",
      password: "",
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      passwordError: ""
    };
  } //end constructor

  fetchUserData() {
    axios
      .post(
        "https://users-service.api.converge-app.net/api/Users/register",
        this.state
      )
      .then(response => {
        if (!response) {
          console.log("Response failed");
        } else {
          console.info("success", response);
          Router.push("/Login");
        }
      })
      .catch(error => {
        console.log("failed", error);
      });
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }; //end change
  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      passwordError: ""
    };

    if (this.state.firstName != "") {
      if (this.state.firstName.length < 2) {
        isError = true;
        errors.firstNameError = "Fornavn skal være mindst 2 tegn";
      }
    }

    if (this.state.lastname != "") {
      if (this.state.lastname.length < 2) {
        isError = true;
        errors.lastNameError = "Efternavn skal være mindst 2 tegn";
      }
    }

    if (this.state.username != "") {
      if (this.state.username.length < 4) {
        isError = true;
        errors.usernameError = "Brugernavn skal være mindst 4 tegn";
      }
    }
    if (this.state.password != "") {
      if (this.state.password.length < 8) {
        isError = true;
        errors.passwordError = "Password skal være mindst 8 tegn";
      }
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };
  Submithandler = e => {
    this.fetchUserData();
    e.preventDefault();
    //console.log(this.state);
    const err = this.validate();
    const errors = {
      firstName: "",
      lastname: "",
      username: "",
      password: "",
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
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
          <div className="formTag">
            <Typography variant="h5" style={{ marginBottom: 15 }}>
              Sign up
            </Typography>
            <form noValidate>
              <div className="txtfield">
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <CssTextField
                      onChange={e => this.change(e)}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Fornavn"
                      error={this.state.firstNameError}
                      helperText={this.state.firstNameError}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <CssTextField
                      onChange={e => this.change(e)}
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Efternavn"
                      name="lastname"
                      autoComplete="lname"
                      error={this.state.lastNameError}
                      helperText={this.state.lastNameError}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CssTextField
                      onChange={e => this.change(e)}
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Brugernavn"
                      name="username"
                      autoComplete="lname"
                      error={this.state.usernameError}
                      helperText={this.state.usernameError}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CssTextField
                      onChange={e => this.change(e)}
                      variant="outlined"
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
                  </Grid>
                </Grid>
              </div>

              <div className="Button">
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
                  Sign Up
                </Button>
              </div>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="login" variant="body2">
                    Har du allerede en konto? Login
                  </Link>
                </Grid>
              </Grid>
            </form>
            <style jsx>{`
              div.formTag {
                margin-top: 100px;
              }
            `}</style>
          </div>
        </Container>
      </div>
    );
  }
}

export default Signup;
