import {Form} from 'formik';
import React from 'react';

export const BoxFormContent = (props: {
    classes: any;
    title: string;
    disabled: boolean;
    children?: any;
}) => {
    return (
        <div className={props.classes.wrapper}>
            <Form>
                <div className={props.classes.box}>
                    {props.children}
                </div>
            </Form>
        </div>
    );
};
