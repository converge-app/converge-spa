import {connect} from 'react-redux'
import {compose} from 'redux';
import {LoginContent} from '../components/content/login/login.content';
import Layout from '../components/layouts/layout';
import {userActions} from '../lib/actions/user.actions';

// @ts-ignore
const LoginPage = ({submitLogin}) => (
    <Layout>
        <LoginContent submitLogin={submitLogin}/>
    </Layout>
);

const mapDispatchToProps = (dispatch: any) => ({
    submitLogin: (payload: any) => {
        dispatch(userActions.login(payload.email, payload.password))
    }
});

export default compose(
    connect(
        null,
        mapDispatchToProps,
    ),
)(LoginPage)
