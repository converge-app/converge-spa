import {FormControl, InputLabel, makeStyles, MenuItem} from '@material-ui/core';
import {Field} from 'formik';
import {Select} from 'formik-material-ui';
import React, {FunctionComponent} from 'react';

const ranges: { [key: string]: any } = {
    software: [
        {
            value: 'web-development',
            label: 'Web development',
        },
        {
            value: 'app-development',
            label: 'App development',
        },
    ],
    design: [
        {
            value: 'graphic-design',
            label: 'Graphic design',
        },
    ],
    writing: [
        {
            value: 'copy-writing',
            label: 'Copy writing',
        },
    ],
};

const useStyles = makeStyles(theme => ({
    select: {
        color: theme.palette.primary.main,
    },
}));

interface IProps {
    category: string;
}

const CreateProjectSubCategory: FunctionComponent<IProps> = props => {
    const classes = useStyles();
    const getCategory = () => {
        if (ranges[props.category] != null) {
            return ranges[props.category].map((option: any) => (
                <MenuItem
                    className={classes.select}
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </MenuItem>
            ))
        }
    };
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel shrink={true} htmlFor="subCategory">
                    Sub category
                </InputLabel>
                <Field
                    type='text'
                    name='subCategory'
                    component={Select}
                    select
                    fullWidth
                    label={'Sub category'}
                    inputProps={{name: 'subCategory', id: 'subCategory'}}
                >
                    {getCategory()}
                </Field>
            </FormControl>
        </div>
    );
};

export default CreateProjectSubCategory;
