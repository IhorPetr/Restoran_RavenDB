import {Dishes} from './dishes';
import {Orders} from './orders';

export class Supplement {
  id: string;
  dish_name: string;
  dish_id: Dishes;
  order_id: Orders;
  count: number;
}
