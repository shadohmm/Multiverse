import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingEmployeeComponent } from './updating-employee.component';

describe('UpdatingEmployeeComponent', () => {
  let component: UpdatingEmployeeComponent;
  let fixture: ComponentFixture<UpdatingEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatingEmployeeComponent]
    });
    fixture = TestBed.createComponent(UpdatingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
