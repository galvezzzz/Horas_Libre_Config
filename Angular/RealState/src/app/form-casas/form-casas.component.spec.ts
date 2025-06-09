import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCasasComponent } from './form-casas.component';

describe('FormCasasComponent', () => {
  let component: FormCasasComponent;
  let fixture: ComponentFixture<FormCasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCasasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
