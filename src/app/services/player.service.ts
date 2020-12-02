import { Injectable, ɵPlayer } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPlayerCriteria } from '../models/player-criteria.model';
import { PlayerRole } from '../models/player-role';
import { PlayerSortBy } from '../models/player-sort-by.enum';
import { IPlayer } from '../models/player.model';
import { Order } from '../models/sort-order.enum';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public budget = 120000000;
  public players: IPlayer[] = [
    {
      id: '1',
      fullName: 'ניקיטה רוקאביצה',
      club: 'מכבי חיפה',
      image: 'https://scorer.co.il/Uploads/2017/10/Lh9KlVNemHByf3.png',
      popular: 87,
      price: 14500000,
      role: PlayerRole.FW,
      score: 608,
      isInTeam: false
    },
    {
      id: '2',
      fullName: 'איתמר ניצן',
      club: 'ביתר ירושלים',
      image: 'https://www.sport5.co.il/files/5/132515.png',
      popular: 20,
      price: 8500000,
      role: PlayerRole.GK,
      score: 217,
      isInTeam: false
    },
    {
      id: '3',
      fullName: 'אוראל דגני',
      club: 'ביתר ירושלים',
      image: 'https://www.sport5.co.il/files/8/132518.png',
      popular: 30,
      price: 8500000,
      role: PlayerRole.DF,
      score: 211,
      isInTeam: false
    },
    {
      id: '4',
      fullName: 'אלירן עטר',
      club: 'ביתר ירושלים',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 6,
      price: 13000000,
      role: PlayerRole.FW,
      score: 9,
      isInTeam: false
    },
    {
      id: '5',
      fullName: 'ניק בלקמן',
      club: 'מכבי תל אביב',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 2,
      price: 11000000,
      role: PlayerRole.FW,
      score: 204,
      isInTeam: false
    },
    {
      id: '6',
      fullName: 'איתמר שבירו',
      club: 'הפועל באר שבע',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 3,
      price: 7000000,
      role: PlayerRole.FW,
      score: 237,
      isInTeam: false
    },
    {
      id: '7',
      fullName: 'אנתוני וארן',
      club: 'הפועל באר שבע',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 2,
      price: 8500000,
      role: PlayerRole.FW,
      score: 203,
      isInTeam: false
    },
    {
      id: '8',
      fullName: 'רועי בן שמעון',
      club: 'בני יהודה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 4,
      price: 7000000,
      role: PlayerRole.FW,
      score: 230,
      isInTeam: false
    },
    {
      id: '8',
      fullName: 'ניב זריהן',
      club: 'בני יהודה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 3,
      price: 8000000,
      role: PlayerRole.FW,
      score: 260,
      isInTeam: false
    },
    {
      id: '9',
      fullName: 'דן ביטון',
      club: 'מכבי תל אביב',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 27,
      price: 10500000,
      role: PlayerRole.MD,
      score: 409,
      isInTeam: false
    },
    {
      id: '10',
      fullName: 'יונתן כהן',
      club: 'מכבי תל אביב',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 27,
      price: 10500000,
      role: PlayerRole.MD,
      score: 482,
      isInTeam: false
    },
    {
      id: '11',
      fullName: 'דן גלזר',
      club: 'מכבי תל אביב',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 10,
      price: 8000000,
      role: PlayerRole.MD,
      score: 129,
      isInTeam: false
    },
    {
      id: '12',
      fullName: 'מאור קנדיל',
      club: 'מכבי תל אביב',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 30,
      price: 8000000,
      role: PlayerRole.DF,
      score: 393,
      isInTeam: false
    },
    {
      id: '13',
      fullName: 'דניאל פרץ',
      club: 'מכבי תל אביב',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 0,
      price: 8000000,
      role: PlayerRole.GK,
      score: 0,
      isInTeam: false
    },
    {
      id: '14',
      fullName: 'נועם כהן',
      club: 'הפועל חדרה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 12,
      price: 4000000,
      role: PlayerRole.DF,
      score: 275,
      isInTeam: false
    },
    {
      id: '14',
      fullName: 'סולומון דניאל',
      club: 'הפועל חדרה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 4,
      price: 7500000,
      role: PlayerRole.DF,
      score: 275,
      isInTeam: false
    },
    {
      id: '15',
      fullName: 'אביב סלומון',
      club: 'הפועל כפר סבא',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 2,
      price: 4000000,
      role: PlayerRole.DF,
      score: 232,
      isInTeam: false
    },
    {
      id: '15',
      fullName: 'עומר דנינו',
      club: 'הפועל כפר סבא',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 0,
      price: 7500000,
      role: PlayerRole.DF,
      score: 138,
      isInTeam: false
    },
    {
      id: '16',
      fullName: 'נס זמיר',
      club: 'הפועל חיפה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 20,
      price: 11500000,
      role: PlayerRole.MD,
      score: 377,
      isInTeam: false
    },
    {
      id: '16',
      fullName: 'קייס גאנם',
      club: 'הפועל חיפה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 20,
      price: 8500000,
      role: PlayerRole.FW,
      score: 204,
      isInTeam: false
    },
    {
      id: '17',
      fullName: 'דני עמוס',
      club: 'מכבי נתניה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 6,
      price: 7500000,
      role: PlayerRole.GK,
      score: 273,
      isInTeam: false
    },
    {
      id: '18',
      fullName: 'יונס מלדה',
      club: 'מכבי נתניה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 31,
      price: 8200000,
      role: PlayerRole.FW,
      score: 447,
      isInTeam: false
    },
    {
      id: '19',
      fullName: 'עידו ואייר',
      club: 'מכבי נתניה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 32,
      price: 8200000,
      role: PlayerRole.DF,
      score: 290,
      isInTeam: false
    },
    {
      id: '20',
      fullName: 'אור אינברום',
      club: 'מכבי פתח תקווה',
      image: 'https://www.pinclipart.com/picdir/middle/404-4045564_icon-man-png-icon-person-woman-png-clipart.png',
      popular: 6,
      price: 8500000,
      role: PlayerRole.MD,
      score: 237,
      isInTeam: false
    },

  ];

  constructor() { }

  public getClubs(): Observable<string[]> {
    const clubs = new Set(this.players.map(player => player.club));
    return of([...clubs]);
  }

  public getPlayersByCriteria(criteria?: Partial<IPlayerCriteria>): Observable<IPlayer[]> {
    let result = this.players;
    if (!criteria) {
      return of(result);
    }
    const fromPrice = criteria.fromPrice ? criteria.fromPrice * 1000000 : 0;
    const toPrice = criteria.toPrice ? criteria.toPrice * 1000000 : Infinity;
    result = result.filter(player => player.price >= fromPrice && player.price <= toPrice);
    if (criteria.term && criteria.term.length) {
      result = result.filter(player => player.fullName.includes(criteria.term));
    }
    if (criteria.club && criteria.club !== 'כל המועדונים') {
      result = result.filter(player => player.club === criteria.club);
    }
    if (criteria.role !== undefined && criteria.role !== null) {
      result = result.filter(player => player.role === criteria.role);
    }
    if (criteria.sort) {
      if (criteria.sort.by === PlayerSortBy.popular) {
        if (criteria.sort.order === Order.asc) {
          result = result.sort((a, b) => a.popular - b.popular);
        } else {
          result = result.sort((a, b) => b.popular - a.popular);
        }
      }
      if (criteria.sort.by === PlayerSortBy.name) {
        if (criteria.sort.order === Order.asc) {
          result = result.sort((a, b) => a.fullName < b.fullName ? -1 : 1);
        } else {
          result = result.sort((a, b) => a.fullName > b.fullName ? -1 : 1);
        }
      }
      if (criteria.sort.by === PlayerSortBy.score) {
        if (criteria.sort.order === Order.asc) {
          result = result.sort((a, b) => a.score - b.score);
        } else {
          result = result.sort((a, b) => b.score - a.score);
        }
      }
      if (criteria.sort.by === PlayerSortBy.price) {
        if (criteria.sort.order === Order.asc) {
          result = result.sort((a, b) => a.price - b.price);
        } else {
          result = result.sort((a, b) => b.price - a.price);
        }
      }
    }
    return of(result);
  }

  public addPlayerToTeam(newPlayer: IPlayer): boolean {
    const myTeam = this.players.filter(player => player.isInTeam);
    const roleCount = myTeam.filter(player => player.role === newPlayer.role).length;
    if (roleCount < 4) {
      newPlayer.isInTeam = true;
      return true;
    } else {
      return false;
    }
  }
}
