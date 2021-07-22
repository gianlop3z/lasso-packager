import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']})
export class CustomInputComponent {

  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() control!: AbstractControl | null;

  get formControl() {
    return this.control as FormControl;
  };
  
};
