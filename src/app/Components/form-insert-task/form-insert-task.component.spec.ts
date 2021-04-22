import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsertTaskComponent } from './form-insert-task.component';

describe('FormInsertTaskComponent', () => {
  let component: FormInsertTaskComponent;
  let fixture: ComponentFixture<FormInsertTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInsertTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInsertTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
