import {Formik, FormikActions} from 'formik';
import React from 'react';
import {IFormValues} from './login.form.values';

export const BoxForm = (props: {
    initialValues: IFormValues;
    validate: (values: any) => Partial<IFormValues>;
    onSubmit: (
        values: any,
        {setSubmitting}: FormikActions<IFormValues>,
    ) => void;
    render: ({
                 submitForm,
                 isSubmitting,
             }: {
        submitForm: any;
        isSubmitting: any;
    }) => any;
}) => (
    <Formik
        initialValues={props.initialValues}
        validate={props.validate}
        onSubmit={props.onSubmit}
        render={props.render}
    />
);
