import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Typography,
} from '@material-ui/core';

const CreateAccountContent = () => {
  const url: string =
    'https://connect.stripe.com/express/oauth/authorize?client_id=ca_G2TdOPuijC1VlDzqRlrPy6K71xfr1JI0';

  return (
    <Container maxWidth='xs'>
      <Card>
        <CardContent>
          <Typography variant='h4' color='primary'>
            Create an Account
          </Typography>
          <br></br>
          <Typography>
            Before you can deposit money, you have to have an account. Converge
            integrates with Stripe to provide you the best and most secure
            payment options.
          </Typography>
          <br></br>
          <Typography>
            With stripe you're able to deposit and withdraw money at any time.
            All that is required is that you have a bank account to link to it.
          </Typography>
          <br />
          <Typography>This is required for working with Converge</Typography>
        </CardContent>
        <CardActions>
          <Link href={url}>
            <Button variant='contained' color='primary'>
              Connect to stripe
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CreateAccountContent;
