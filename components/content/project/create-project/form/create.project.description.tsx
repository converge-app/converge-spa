import {Field} from 'formik';
import {TextField} from 'formik-material-ui';
import { FunctionComponent } from 'react';

const CreateProjectDescription: FunctionComponent = () => {
  return <div>
    <Field
        name='description'
        type={'text'}
        label={'Description'}
        component={TextField}
        fullWidth
        multiline
    />
  </div>;
};

export default CreateProjectDescription;
