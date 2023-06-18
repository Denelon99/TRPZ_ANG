import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStorageFormComponent } from './add-storage-form.component';

describe('AddStorageFormComponent', () => {
  let component: AddStorageFormComponent;
  let fixture: ComponentFixture<AddStorageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStorageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStorageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
