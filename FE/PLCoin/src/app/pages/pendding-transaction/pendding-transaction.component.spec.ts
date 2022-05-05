import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenddingTransactionComponent } from './pendding-transaction.component';

describe('PenddingTransactionComponent', () => {
  let component: PenddingTransactionComponent;
  let fixture: ComponentFixture<PenddingTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenddingTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenddingTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
