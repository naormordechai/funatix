import { PlayerRole } from './player-role';

export interface IPlayer {
    id: string;
    fullName: string;
    role: PlayerRole;
    image: string;
    price: number;
    popular: number;
    club: string;
    score: number;
    isInTeam: boolean;
}
