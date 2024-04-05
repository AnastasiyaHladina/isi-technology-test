import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertService } from "../../services/alert/alert.service";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  animations: [
  trigger('slideInOut', [
    state('in', style({
      transform: 'translateY(0)',
      opacity: 1
    })),
    transition('void => *', [
      style({
        transform: 'translateY(100%)',
        opacity: 0
      }),
      animate('500ms ease-in')
    ]),
    transition('* => void', [
      animate('500ms ease-out', style({
        transform: 'translateY(100%)',
        opacity: 0
      }))
    ])
  ])
],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  alert$ = this.alertService.alert$;

  constructor(private alertService: AlertService) {}
}
