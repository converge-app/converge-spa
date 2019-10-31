import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
} from '@material-ui/core';
import { Field } from 'formik';
import { Select } from 'formik-material-ui';
import React, { FunctionComponent } from 'react';
import { ICategory } from '../../../../../lib/models/category.model';
import { CategoryService } from '../../../../../services/category.service';

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
        <InputLabel shrink={true} htmlFor='category'>
          Category
        </InputLabel>
        <Field
          type='text'
          name='category'
          label='Category'
          select
          component={Select}
          fullWidth
          inputProps={{ name: 'category', id: 'category' }}
        >
          {CategoryService.getAll().map((option: ICategory) => (
            <MenuItem
              className={classes.select}
              key={option.label}
              value={option.value}
            >
              {CategoryService.getCapilatized(option.label)}
            </MenuItem>
          ))}
        </Field>
      </FormControl>
    </div>
  );
};

export default CreateProjectCategory;
