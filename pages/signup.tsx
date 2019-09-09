import React from "react";
import Header from "../components/header";
import {
  Grid,
  TextField,
  Button,
  Link,
  Container,
  Typography,
  Box
} from "@material-ui/core";

function Signup(): JSX.Element {
  const textfield = {
    background: "#fff",
    borderRadius: 4
  };

  const btn = {
    marginTop: 20,
    background: "#13A8FE"
  };

  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>

      <Container component="main" maxWidth="xs">
        <div className="formTag">
          <Typography component="h1" variant="h5" style={{ marginBottom: 15 }}>
            Sign up
          </Typography>
          <form noValidate>
            <div className="txtfield">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    style={textfield}
                    autoComplete="fname"
                    name="firstName"
                    variant="filled"
                    required
                    fullWidth
                    id="firstName"
                    label="Navn"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    style={textfield}
                    variant="filled"
                    required
                    fullWidth
                    id="lastName"
                    label="Efternavn"
                    name="lastname"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={textfield}
                    variant="filled"
                    required
                    fullWidth
                    id="username"
                    label="Brugernavn"
                    name="username"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={textfield}
                    variant="filled"
                    required
                    fullWidth
                    id="email"
                    label="Email Addresse"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={textfield}
                    variant="filled"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
            </div>

            <div className="Button">
              <Button
                style={btn}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
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

export default Signup;
