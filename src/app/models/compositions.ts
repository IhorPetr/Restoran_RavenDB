import {Dishes} from './dishes';
import {Ingredients} from './ingredients';

export class Compositions {
  id: string;
  ingredient_name: string;
  count: number;
  weight: number;
  dish: Dishes;
  ingredient: Ingredients;
}
