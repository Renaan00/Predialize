import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEnterprisesComponent } from './all-enterprises.component';

describe('AllEnterprisesComponent', () => {
  let component: AllEnterprisesComponent;
  let fixture: ComponentFixture<AllEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEnterprisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
