import React from "react";
import Header from "../components/Header";
import { TextField, Button, Container, Typography } from "@material-ui/core";

function ForgotPassword(): JSX.Element {
  const forgot_password_textfield = {
    background: "#ffffff",
    borderRadius: 4
  };

  const btn_forgot_password = {
    marginTop: 20,
    background: "#13A8FE"
  };

  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <Container maxWidth="xs">
        <div className="forgot_password">
          <Typography variant="h5">Forgot password</Typography>
          <form>
            <div className="txtfield">
              <TextField
                style={forgot_password_textfield}
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
            </div>
            <Button
              type="submit"
              style={btn_forgot_password}
              fullWidth
              variant="contained"
              color="primary"
            >
              Nulstil
            </Button>
          </form>
          <style jsx>{`
            div.forgot_password {
              margin-top: 100px;
            }
          `}</style>
        </div>
      </Container>
    </div>
  );
}

export default ForgotPassword;
