import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { MatSidenavModule } from '@angular/material';
import { TransferMarketContainerComponent } from './components/transfer-market-container/transfer-market-container.component';
import { TransferMarketListComponent } from './components/transfer-market-list/transfer-market-list.component';
import { TransferMarketRowComponent } from './components/transfer-market-row/transfer-market-row.component';
import { AppHeaderComponent } from './components/UI/app-header/app-header.component';
import { UserBudgetComponent } from './components/user-budget/user-budget.component';
import { TransferMarketFilterComponent } from './components/transfer-market-filter/transfer-market-filter.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TransferMarketContainerComponent,
    TransferMarketListComponent,
    TransferMarketRowComponent,
    AppHeaderComponent,
    UserBudgetComponent,
    TransferMarketFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
