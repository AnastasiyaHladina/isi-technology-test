import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { SharedModule } from "../shared.module";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserTypesEnum } from "../../enums/user-types";

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const minLength: number = 8;
  const maxLength: number = 30;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule, ReactiveFormsModule ],
      declarations: [ FormComponent ],
      providers: [ { provide: FormBuilder, useValue: formBuilder } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.user = {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userType: UserTypesEnum.Driver,
    };
    component.form = formBuilder.group({
      userName: ['userName', [Validators.required, Validators.maxLength(maxLength)]],
      firstName: ['firstName', [Validators.required, Validators.maxLength(maxLength)]],
      lastName: ['lastName', [Validators.required, Validators.maxLength(maxLength)]],
      email:['email', [Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        Validators.maxLength(maxLength)]],
      userType: ['userType', [Validators.required]],
      password: ['password',
        [Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
        Validators.minLength(minLength),
        Validators.maxLength(maxLength)]],
      passwordConfirm:['passwordConfirm', [Validators.required]],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
