import React from "react";
import Header from "../components/header";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Login(): JSX.Element {
  const login_textfield = {
    background: "#ffffff",
    borderRadius: 10
  };

  const login_btn = {
    marginTop: 20,
    background: "#13A8FE"
  };

  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <Container component="main" maxWidth="xs">
        <div className="login">
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form noValidate>
            <div className="txtfield">
              <TextField
                style={login_textfield}
                margin="normal"
                variant="filled"
                required
                fullWidth
                id="email"
                label="Email Addresse"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                style={login_textfield}
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={login_btn}
              color="primary"
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

export default Login;
