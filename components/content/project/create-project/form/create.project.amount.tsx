import {Field} from 'formik';
import {TextField} from 'formik-material-ui';
import { FunctionComponent } from 'react';

const CreateProjectAmount: FunctionComponent = () => {
  return <div>
    <Field
        required
        name='amount'
        type={'number'}
        label={'Amount'}
        component={TextField}
        fullWidth
    />
  </div>;
};

export default CreateProjectAmount;
