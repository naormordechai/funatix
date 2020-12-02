import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerSortBy } from 'src/app/models/player-sort-by.enum';
import { IPlayer } from 'src/app/models/player.model';
import { Order } from 'src/app/models/sort-order.enum';

@Component({
  selector: 'app-transfer-market-list',
  templateUrl: './transfer-market-list.component.html',
  styleUrls: ['./transfer-market-list.component.scss']
})
export class TransferMarketListComponent implements OnInit {

  public PlayerSortBy = PlayerSortBy;
  public sortedBy = {
    popular: Order.asc,
    name: Order.asc,
    score: Order.asc,
    price: Order.asc
  };

  @Input() players: IPlayer[];
  @Input() sortBy: PlayerSortBy;

  @Output() onsortedEvent = new EventEmitter();
  @Output() clearSearchEvent = new EventEmitter();
  @Output() addPlayerToTeamEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSortedClicked(name: string) {
    const sortRes = {
      by: PlayerSortBy[name],
      order: this.sortedBy[name]
    };
    this.sortedBy[name] = this.sortedBy[name] === Order.asc ? Order.desc : Order.asc;
    this.onsortedEvent.emit(sortRes);
  }

  public addPlayerToTeam(player: IPlayer) {
    this.addPlayerToTeamEvent.emit(player);
  }

  public clearSearch() {
    this.clearSearchEvent.emit();
  }

}
