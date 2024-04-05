import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserTypesEnum } from "../../enums/user-types";
import { User } from "../../interfaces/user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnChanges {
  @Input() buttonTitle: string = '';
  @Input() buttonType: string = '';
  @Input() user!: User;
  @Output() submitClick = new EventEmitter<User>();
  @Output() deleteClick = new EventEmitter<void>();

  types: [];
  form!: FormGroup;
  private minLength: number = 8;
  private maxLength: number = 30;

  constructor(private formBuilder: FormBuilder) {
    this.types = Object.values(UserTypesEnum).filter(value => typeof value === 'number') as [];
  }

  ngOnChanges(): void {
    this.form = this.formBuilder.group({
      userName: new FormControl(this.user?.userName, [
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),
      firstName: new FormControl(this.user?.firstName, [
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),
      lastName: new FormControl(this.user?.lastName, [
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),
      email: new FormControl(this.user?.email, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        Validators.maxLength(this.maxLength),
      ]),
      userType: new FormControl(this.user?.userType, [
        Validators.required,
      ]),
      password: new FormControl(this.user?.password, [
        Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
      ]),
      passwordConfirm: new FormControl(this.user?.password, [
        Validators.required,
      ]),
    },{
      validators: this.matchValidator('password', 'passwordConfirm')
    });
  }

  private matchValidator(password: string, passwordConfirm: string) {
    return (formGroup: FormGroup) => {
      const pass = formGroup?.controls[password]?.value;
      const confirm = formGroup?.controls[passwordConfirm]?.value;

      if(confirm === pass) {
        return null;
      }

      const error = { confirmedValidator: 'Passwords do not match.' };
      this.form?.get(passwordConfirm)?.setErrors(error);
      return error;
    }
  }

  isInputInvalid(name: string): boolean {
    return !!(this.isTouched(this.form, name) && this.form.get(name)?.invalid);
  }

  private isTouched(form: FormGroup, input: string): boolean | undefined {
    return form.get(input)?.touched;
  }

  onSubmit(): void {
    const updatedUser = this.form.value;
    delete updatedUser.passwordConfirm;
    this.submitClick.emit(updatedUser);
  }

  onDelete(): void {
    this.deleteClick.emit();
  }
}
