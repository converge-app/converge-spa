import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {SignUpContent} from '../components/content/sign-up/sign-up.content';
import Layout from '../components/layouts/layout';
import {userActions} from '../lib/actions/user.actions';

// @ts-ignore
const SignUpPage = ({submitSignUp}) => {
    return (
        <Layout>
            <SignUpContent submitSignUp={submitSignUp}/>
        </Layout>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    submitSignUp: (payload: any) => {
        dispatch(userActions.signUp(payload.email, payload.password, payload.confirmPassword, payload.firstName, payload.lastName))
    }
});

export default compose(
    connect(
        null,
        mapDispatchToProps
    ),
)(SignUpPage)
