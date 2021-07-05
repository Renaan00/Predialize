import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsNameComponent } from './client-details-name.component';

describe('ClientDetailsNameComponent', () => {
  let component: ClientDetailsNameComponent;
  let fixture: ComponentFixture<ClientDetailsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDetailsNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
