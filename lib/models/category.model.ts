import {ISubCategory} from './subcategory.model';

export interface ICategory {
    name: string
    subCategories: ISubCategory[]
}
