import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormComponent } from './create-form.component';

describe('PopupComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
