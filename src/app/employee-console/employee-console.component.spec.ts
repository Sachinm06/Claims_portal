import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeConsoleComponent } from './employee-console.component';

describe('EmployeeConsoleComponent', () => {
  let component: EmployeeConsoleComponent;
  let fixture: ComponentFixture<EmployeeConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
