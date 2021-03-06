import { Component, Input } from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']})
export class ActionButtonComponent {

  @Input() goback!: boolean;
  @Input() label!: string;
  @Input() includeIcon = true;
  @Input() disabled!: boolean;
  
};
