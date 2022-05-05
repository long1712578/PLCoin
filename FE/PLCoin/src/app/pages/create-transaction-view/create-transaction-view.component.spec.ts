import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransactionViewComponent } from './create-transaction-view.component';

describe('CreateTransactionViewComponent', () => {
  let component: CreateTransactionViewComponent;
  let fixture: ComponentFixture<CreateTransactionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransactionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
