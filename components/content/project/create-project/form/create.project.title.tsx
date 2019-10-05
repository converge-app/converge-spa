import {Field} from 'formik';
import {TextField} from 'formik-material-ui';
import {FunctionComponent} from 'react';

const CreateProjectTitle: FunctionComponent = () => {
    return (
        <div>
            <Field
                name='title'
                type={'text'}
                label={'Project Title'}
                component={TextField}
                fullWidth
            />
        </div>
    );
};

export default CreateProjectTitle;
