import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import React from "react";
import { TextField } from "formik-material-ui";
import { lighten } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { services } from "../../../../../services";
import { IBid } from "../../../../../lib/models/bid.model";
import { BidActions } from "../../../../../lib/actions/bid.actions";

interface IFormValues {
  amount: string;
  message?: string;
}

const useStyles = makeStyles(theme => ({
  moveDown: {
    paddingTop: theme.spacing(4),
    borderTopColor: lighten(theme.palette.background.default, 0.05),
    borderTopWidth: 1.5,
    borderTopStyle: "solid",
    marginRight: theme.spacing(4)
  },
  indent: {
    paddingLeft: theme.spacing(4)
  },
  buttonContainer: {
    display: "flex"
  },
  button: {
    marginLeft: "auto",
    marginRight: 0,
    flexFlow: "start-end"
  }
}));

interface IProps {
  projectId: string;
}

const OpenProjectBid: React.FunctionComponent<IProps> = props => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.moveDown}>
      <Typography variant={"h5"} color="primary">
        Bid
      </Typography>
      <Formik
        initialValues={{
          amount: 0,
          message: ""
        }}
        validate={values => {
          const errors: Partial<IFormValues> = {};

          if (!values.amount) {
            errors.amount = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          values = values;

          const bid: IBid = {
            projectId: props.projectId,
            freelancerId: services.authentication.getId(),
            message: values.message,
            amount: values.amount
          };

          dispatch(BidActions.placeBid(bid, setSubmitting));

          console.log(values);
          setSubmitting(false);
        }}
        render={({ submitForm, isSubmitting }) => (
          <Form className={classes.indent}>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <Field
                  type={"text"}
                  name="message"
                  label="Message"
                  component={TextField}
                  fullWidth
                  multiline
                  rows={4}
                ></Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  type={"number"}
                  name="amount"
                  label="Amount"
                  placeholder="Amount"
                  min={1}
                  required
                  component={TextField}
                ></Field>
              </Grid>
              <Grid item xs={6} className={classes.buttonContainer}>
                <Button
                  className={classes.button}
                  disabled={isSubmitting}
                  onClick={submitForm}
                  variant={"contained"}
                  color="primary"
                >
                  BID
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      ></Formik>
    </div>
  );
};

export default OpenProjectBid;
