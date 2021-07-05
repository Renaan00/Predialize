import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsTotalsComponent } from './client-details-totals.component';

describe('ClientDetailsTotalsComponent', () => {
  let component: ClientDetailsTotalsComponent;
  let fixture: ComponentFixture<ClientDetailsTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDetailsTotalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
