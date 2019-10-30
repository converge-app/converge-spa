import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
} from '@material-ui/core';
import { Field } from 'formik';
import { Select } from 'formik-material-ui';
import React, { FunctionComponent } from 'react';
import { ISubCategory } from '../../../../../lib/models/subcategory.model';
import { CategoryService } from '../../../../../services/category.service';

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
    const subCategories:
      | ISubCategory[]
      | null = CategoryService.getSubCategories(props.category);
    if (subCategories != null) {
      return subCategories.map((option: ISubCategory) => (
        <MenuItem
          className={classes.select}
          key={option.label}
          value={option.label}
        >
          {CategoryService.getCapilatized(option.label)}
        </MenuItem>
      ));
    }
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel shrink={true} htmlFor='subCategory'>
          Sub category
        </InputLabel>
        <Field
          type='text'
          name='subCategory'
          component={Select}
          select
          fullWidth
          label={'Sub category'}
          inputProps={{ name: 'subCategory', id: 'subCategory' }}
        >
          {getCategory()}
        </Field>
      </FormControl>
    </div>
  );
};

export default CreateProjectSubCategory;
