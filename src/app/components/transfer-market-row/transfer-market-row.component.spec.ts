import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMarketRowComponent } from './transfer-market-row.component';

describe('TransferMarketRowComponent', () => {
  let component: TransferMarketRowComponent;
  let fixture: ComponentFixture<TransferMarketRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMarketRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMarketRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
