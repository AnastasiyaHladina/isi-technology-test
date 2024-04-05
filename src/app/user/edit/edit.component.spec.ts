import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { SharedModule } from "../../shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { UserTypesEnum } from "../../enums/user-types";

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule, RouterTestingModule ],
      declarations: [ EditComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    component.user = {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userType: UserTypesEnum.Driver,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
