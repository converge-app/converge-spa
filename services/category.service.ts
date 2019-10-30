import { ICategory } from '../lib/models/category.model';
import { ISubCategory } from '../lib/models/subcategory.model';

export class CategoryService {
  public static getAll(): ICategory[] {
    return this.categories;
  }

  public static getAllSorted(): ICategory[] {
    const copiedCategories = [...this.categories];
    return copiedCategories.sort((a, b) => a.value.localeCompare(b.value));
  }

  public static getSubCategories(categoryName: string): ISubCategory[] | null {
    const category = this.categories.find(item => item.label === categoryName);
    if (category) {
      return category.subCategories;
    } else {
      return null;
    }
  }

  public static getSubCategoriesSorted(
    categoryName: string,
  ): ISubCategory[] | null {
    if (this.getSubCategories(categoryName) != null) {
      // @ts-ignore
      const copiedSubCategories = [...this.getSubCategories(categoryName)];
      return copiedSubCategories.sort((a, b) => a.value.localeCompare(b.value));
    }
    return null;
  }

  public static getCapilatized(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  public static getByCategoryAndString(
    categoryValue: string,
    subString: string,
  ) {
    const subCategories: ISubCategory[] = this.getSubCategories(
      categoryValue,
    ) as ISubCategory[];

    if (subCategories) {
      return subCategories.filter(category =>
        category.label.toLowerCase().includes(subString),
      );
    }
  }

  private static categories: ICategory[] = [
    {
      label: 'Software',
      value: 'software',
      subCategories: [
        {
          label: 'Web development',
          value: 'web-development',
        },
        {
          label: 'App development',
          value: 'app-development',
        },
      ],
    },
    {
      label: 'Graphic design',
      value: 'graphic-design',
      subCategories: [
        {
          label: 'Icons',
          value: 'icons',
        },
        {
          label: 'Banner',
          value: 'banner',
        },
      ],
    },
  ];
}
