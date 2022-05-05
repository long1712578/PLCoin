import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWalletViewComponent } from './create-wallet-view.component';

describe('CreateWalletViewComponent', () => {
  let component: CreateWalletViewComponent;
  let fixture: ComponentFixture<CreateWalletViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWalletViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWalletViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
