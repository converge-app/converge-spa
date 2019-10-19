import { ISubCategory } from './subcategory.model';

export interface ICategory {
  label: string;
  value: string;
  subCategories: ISubCategory[];
}
