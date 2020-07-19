import { Category } from './category';

export interface Product {
  id : number;
  title: string;
  subTitle: string;
  image: string;
  price: number;
  description: string;
  Category : Category;
}
