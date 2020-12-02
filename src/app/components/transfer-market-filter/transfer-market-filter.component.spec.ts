import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMarketFilterComponent } from './transfer-market-filter.component';

describe('TransferMarketFilterComponent', () => {
  let component: TransferMarketFilterComponent;
  let fixture: ComponentFixture<TransferMarketFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMarketFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMarketFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
