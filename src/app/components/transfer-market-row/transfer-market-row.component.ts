import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlayer } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerRole } from '../../models/player-role';

@Component({
  selector: 'app-transfer-market-row',
  templateUrl: './transfer-market-row.component.html',
  styleUrls: ['./transfer-market-row.component.scss']
})
export class TransferMarketRowComponent implements OnInit {

  public PlayerRole = PlayerRole;
  @Input() player: IPlayer;

  @Output() addPlayerToTeamEvent = new EventEmitter();

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  addPlayerToTeam(player: IPlayer) {
    this.addPlayerToTeamEvent.emit(player);
  }

}
