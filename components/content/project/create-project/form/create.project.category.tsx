import {FormControl, InputLabel, makeStyles, MenuItem} from '@material-ui/core';
import {Field} from 'formik';
import {Select} from 'formik-material-ui';
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

const useStyles = makeStyles(theme => ({
    select: {
        color: theme.palette.primary.main,
    },
}));

const CreateProjectCategory: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel shrink={true} htmlFor="category">
                    Category
                </InputLabel>
                <Field
                    type='text'
                    name='category'
                    label='Category'
                    select
                    component={Select}
                    fullWidth
                    inputProps={{name: 'category', id: 'category'}}
                >
                    {ranges.map(option => (
                        <MenuItem
                            className={classes.select}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Field>
            </FormControl>

        </div>
    );
};

export default CreateProjectCategory;
