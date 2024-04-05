import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { SharedModule } from "../shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ SharedModule, RouterTestingModule ],
      declarations: [ UserComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
