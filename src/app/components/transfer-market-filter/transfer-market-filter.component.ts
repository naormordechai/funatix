import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerRole } from '../../models/player-role';

@Component({
  selector: 'app-transfer-market-filter',
  templateUrl: './transfer-market-filter.component.html',
  styleUrls: ['./transfer-market-filter.component.scss']
})
export class TransferMarketFilterComponent implements OnInit {

  public PlayerRole = PlayerRole;

  @Input() form: FormGroup;
  @Input() clubs: string[];
  @Input() millions: number[];
  @Input() role: PlayerRole;

  @Output() roleFilterEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public roleFilterChanged(role: PlayerRole) {
    this.roleFilterEvent.emit(role);
  }

}
