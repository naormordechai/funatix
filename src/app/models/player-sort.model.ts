import { PlayerSortBy } from './player-sort-by.enum';
import { Order } from './sort-order.enum';

export interface IPlayerSort {
    by: PlayerSortBy;
    order: Order;
}
