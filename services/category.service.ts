import {ICategory} from '../lib/models/category.model';
import {ISubCategory} from '../lib/models/subcategory.model';

export class CategoryService {

    public static getAll(): ICategory[] {
        return this.categories;
    }

    public static getAllSorted(): ICategory[] {
        const copiedCategories = [...this.categories];
        return copiedCategories.sort((a, b) => a.name.localeCompare(b.name));
    }

    public static getSubCategories(categoryName: string): ISubCategory[] | null {
        const category =  this.categories.find((item) => item.name === categoryName)
        if (category) {
            return category.subCategories;
        } else {
            return null;
        }
    }

    public static getSubCategoriesSorted(categoryName: string): ISubCategory[] | null {
        if (this.getSubCategories(categoryName) != null) {
            // @ts-ignore
            const copiedSubCategories = [...this.getSubCategories(categoryName)];
            return copiedSubCategories.sort((a, b) => a.name.localeCompare(b.name));
        }
        return null;
    }

    public static getCapilatized(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    private static categories: ICategory[] = [
        {
            name: 'Software',
            subCategories: [
                {
                    name: 'Web development',
                },
                {
                    name: 'App development',
                },
            ],
        },
        {
            name: 'Graphic design',
            subCategories: [
                {
                    name: 'Icons',
                },
                {
                    name: 'Banner',
                },
            ],
        },
    ]
}
