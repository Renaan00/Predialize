import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseNameComponent } from './enterprise-name.component';

describe('EnterpriseNameComponent', () => {
  let component: EnterpriseNameComponent;
  let fixture: ComponentFixture<EnterpriseNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
