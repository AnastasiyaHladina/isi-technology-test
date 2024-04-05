import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationErrorComponent } from './validation-error.component';
import { SharedModule } from "../shared.module";

describe('ValidationErrorComponent', () => {
  let component: ValidationErrorComponent;
  let fixture: ComponentFixture<ValidationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ ValidationErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
