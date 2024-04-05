import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-danger-button',
  templateUrl: './danger-button.component.html',
  styleUrl: './danger-button.component.scss'
})
export class DangerButtonComponent {
  @Input() buttonTitle: string = '';
  @Input() buttonType: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  onButtonDangerClick():void {
    this.buttonClick.emit();
  }
}
