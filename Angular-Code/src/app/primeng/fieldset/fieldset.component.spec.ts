import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetComponent } from './fieldset.component';

describe('FieldsetComponent', () => {
  let component: FieldsetComponent;
  let fixture: ComponentFixture<FieldsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsetComponent]
    });
    fixture = TestBed.createComponent(FieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
