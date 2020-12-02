import { PlayerRole } from './player-role';
import { IPlayerSort } from './player-sort.model';

export interface IPlayerCriteria {
    term: string;
    role: PlayerRole;
    fromPrice: number;
    toPrice: number;
    club: string;
    popular: number;
    sort: IPlayerSort;
}
