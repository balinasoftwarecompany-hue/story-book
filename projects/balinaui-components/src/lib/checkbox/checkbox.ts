import {Component,Input,Output,EventEmitter,HostBinding} from '@angular/core';

@Component({
  selector: 'brb-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {

  // INPUTS

  @Input() label: string = ' ';

  @Input() checked: boolean = false;

  @Input() disabled: boolean = false;

  @Input() clickable: boolean = true;

  @Input() customClass: string = '';


  // HOST CLASSES

  @HostBinding('class')
  get hostClasses(): string {

    return [
      this.customClass,

      this.clickable
        ? 'checkbox-clickable'
        : '',

      this.disabled
        ? 'checkbox-disabled'
        : '',

      this.checked
        ? 'checkbox-checked'
        : ''

    ]
      .filter(Boolean)
      .join(' ');
  }


  // EVENTS

  @Output()
  changed =
    new EventEmitter<boolean>();


  @Output()
  clicked =
    new EventEmitter<MouseEvent>();


  // CHANGE

  onChange(
    event: Event
  ): void {

    if (
      this.disabled ||
      !this.clickable
    ) {
      return;
    }

    const input =
      event.target as HTMLInputElement;

    this.checked =
      input.checked;

    this.changed.emit(
      this.checked
    );
  }


  // CLICK

  onClick(
    event: MouseEvent
  ): void {

    if (
      this.disabled ||
      !this.clickable
    ) {
      return;
    }

    this.clicked.emit(event);
  }
}