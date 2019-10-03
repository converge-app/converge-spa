import {makeStyles, MenuItem} from '@material-ui/core';
import MuiSelect from '@material-ui/core/Select';
import {Field} from 'formik';
import {fieldToSelect, TextFieldProps} from 'formik-material-ui';
import React, {FunctionComponent} from 'react';

const ranges = [
    {
        value: 'software',
        label: 'Software',
    },
    {
        value: 'design',
        label: 'Design',
    },
    {
        value: 'writing',
        label: 'Writing',
    },
];

const useStyles = makeStyles((theme) => ({
    select: {
        color: theme.palette.primary.main,
    },
}));

const CreateProjectSelect = (props: TextFieldProps) => {
    return (
        <MuiSelect fullWidth {...fieldToSelect(props)}/>
    );
}

const CreateProjectCategory: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Field type='text' name={'category'} component={CreateProjectSelect} select fullWidth label={'Category'}
                   helperText={'Please select a category'} InputLabelProps={{
                shrink: true,
            }}
            >
                {ranges.map(option => (
                    <MenuItem className={classes.select} key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Field>
        </div>
    );
};

export default CreateProjectCategory;
