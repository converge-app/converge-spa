import {
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from '@material-ui/core';
import Router from 'next/router';
import React from 'react';
import { ISubCategory } from '../../../lib/models/subcategory.model';
import { CategoryService } from '../../../services/category.service';

const CategoryContent = () => {
  const [category, setCategory] = React.useState(
    CategoryService.getAll()[0].value,
  );

  const subCategories:
    | ISubCategory[]
    | null = CategoryService.getSubCategoriesSorted(category);

  function renderSubcategories(
    subCategories: ISubCategory[] | null,
  ): React.ReactNode {
    if (searchContent !== '') {
      subCategories = CategoryService.getByCategoryAndString(
        category,
        searchContent.toLowerCase(),
      ) as ISubCategory[] | null;
    }
    if (subCategories != null) {
      return subCategories.length > 0 ? (
        <Grid item md={6} xs={12}>
          <List>
            {subCategories.map((subCategory, index) => (
              <ListItem>
                <Typography
                  key={index}
                  onClick={() => chooseSubcategory(subCategory.value)}
                >
                  {subCategory.label}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      ) : null;
    } else {
      return null;
    }
  }

  const chooseSubcategory = (subCategory: string) => {
    console.log(category)
    console.log(subCategory)
    Router.push({
      pathname: '/projects/open',
      query: {
        category,
        subCategory,
      }
    });
  };

  const [searchContent, setSearchContent] = React.useState('');

  return (
    <Container maxWidth='md'>
      <Grid container spacing={4}>
        <Grid xs={12}>
          <Container maxWidth='xs'>
            <TextField
              onChange={(e: any) => setSearchContent(e.target.value)}
              fullWidth
              label='Search'
              value={searchContent}
            ></TextField>
          </Container>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant='h6' color='primary'>
            Categories
          </Typography>
          <List>
            {CategoryService.getAll().map((value, index) => (
              <ListItem key={index}>
                <Typography
                  variant='body1'
                  onClick={() => setCategory(value.value)}
                >
                  {value.label}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
        {renderSubcategories(subCategories)}
      </Grid>
    </Container>
  );
};

export default CategoryContent;
