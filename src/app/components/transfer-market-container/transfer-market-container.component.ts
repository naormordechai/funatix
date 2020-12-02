import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { IPlayerCriteria } from 'src/app/models/player-criteria.model';
import { PlayerRole } from 'src/app/models/player-role';
import { IPlayer } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-transfer-market-container',
  templateUrl: './transfer-market-container.component.html',
  styleUrls: ['./transfer-market-container.component.scss']
})
export class TransferMarketContainerComponent implements OnInit {

  private criteria: Partial<IPlayerCriteria> = {};
  public players: Observable<IPlayer[]>;
  public playerForm: FormGroup;
  public budget = 120000000;
  public clubs: Observable<string[]>;
  public millionsPrices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor(
    private playerService: PlayerService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.players = this.playerService.getPlayersByCriteria();
    this.clubs = this.playerService.getClubs();
    this.buildForm();
    this.playerForm.valueChanges.subscribe(res => {
      this.criteria = { ...this.criteria, ...res };
      this.players = this.playerService.getPlayersByCriteria(this.criteria);
    });
  }

  private buildForm() {
    this.playerForm = this.fb.group({
      term: [null],
      club: ['כל המועדונים'],
      fromPrice: [1],
      toPrice: [20]
    });
  }

  public roleFilterChanged(role: PlayerRole) {
    this.criteria = { ...this.criteria, role };
    this.players = this.playerService.getPlayersByCriteria(this.criteria);
  }

  public onSortedClicked(sortRes: any) {
    this.criteria = { ...this.criteria, sort: sortRes };
    this.players = this.playerService.getPlayersByCriteria(this.criteria);
  }

  public addPlayerToTeam(player: IPlayer) {
    if (this.budget >= player.price) {
      const isAddedSuccess = this.playerService.addPlayerToTeam(player);
      if (isAddedSuccess) {
        this.budget -= player.price;
      } else {
        this.openSnackBar('אתה לא יכול להוסיף יותר מארבעה שחקנים מאותו עמדה', 'סגור');
      }
    } else {
      this.openSnackBar('אין לך מספיק כסף בכדי לקנות שחקן זה', 'סגור');
    }
  }

  private openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2500,
    });
  }

  public clearSearchHandler() {
    this.playerForm.controls.term.setValue(null);
    this.playerForm.controls.club.setValue('כל המועדונים');
    this.playerForm.controls.fromPrice.setValue(1);
    this.playerForm.controls.toPrice.setValue(20);
    this.criteria = { ...this.playerForm.value, role: null };
    this.players = this.playerService.getPlayersByCriteria(this.criteria);
  }

}
