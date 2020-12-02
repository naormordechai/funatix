import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMarketListComponent } from './transfer-market-list.component';

describe('TransferMarketListComponent', () => {
  let component: TransferMarketListComponent;
  let fixture: ComponentFixture<TransferMarketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMarketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMarketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
