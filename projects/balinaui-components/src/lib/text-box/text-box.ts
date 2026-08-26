import {Component,EventEmitter,HostBinding,Input,Output} from '@angular/core';

@Component({
  selector: 'brb-text-box',
  standalone: true,
  imports: [],
  templateUrl: './text-box.html',
  styleUrl: './text-box.css'
})
export class TextBox {

  // INPUTS

  @Input() placeholder: string = '';

  @Input() value: string = '';

  @Input() type: string = 'text';

  @Input() disabled: boolean = false;

  @Input() readonly: boolean = false;

  @Input()
  @HostBinding('class')
  customClass: string = '';


  // OUTPUT EVENTS

  @Output()
  valueChange =
    new EventEmitter<string>();


  @Output()
  inputChange =
    new EventEmitter<string>();


  @Output()
  clicked =
    new EventEmitter<MouseEvent>();


  // PASSWORD VISIBILITY

  showPassword: boolean = false;


  get inputType(): string {

    if (this.type === 'password') {

      return this.showPassword
        ? 'text'
        : 'password';
    }

    return this.type;
  }


  /**
   * Show/hide password.
   */
  togglePassword(event: MouseEvent): void {

    event.stopPropagation();

    this.showPassword =
      !this.showPassword;
  }


  // INPUT HANDLER

  onInput(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    this.value = input.value;

    // Emit current value
    this.valueChange.emit(
      this.value
    );

    // Emit input event
    this.inputChange.emit(
      this.value
    );
  }


  // CLICK HANDLER

  onClick(event: MouseEvent): void {

    this.clicked.emit(event);
  }
}