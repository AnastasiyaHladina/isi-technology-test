import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerButtonComponent } from './danger-button.component';
import { SharedModule } from "../shared.module";

describe('DangerButtonComponent', () => {
  let component: DangerButtonComponent;
  let fixture: ComponentFixture<DangerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ DangerButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
