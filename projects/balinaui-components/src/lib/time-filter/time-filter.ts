import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'brb-time-filter',
  standalone: true,
  imports: [],
  templateUrl: './time-filter.html',
  styleUrl: './time-filter.css'
})
export class TimeFilter {

  // INPUTS

  @Input() label: string = '';

  @Input() value: string = '';

  @Input() selectedValue: string | null = null;

  @Input() customClass: string = '';

  @Input() clickable: boolean = true;

  @Input() disabled: boolean = false;


  @HostBinding('class')
  get hostClasses(): string {

    return [
      this.customClass,

      this.clickable
        ? 'time-filter-clickable'
        : '',

      this.disabled
        ? 'time-filter-disabled'
        : ''

    ]
      .filter(Boolean)
      .join(' ');
  }


  // OUTPUTS

  @Output() selectedValueChange =
    new EventEmitter<string>();

  @Output() clicked =
    new EventEmitter<MouseEvent>();


  // INTERNAL STATE

  private internalSelected: boolean = false;


  // SELECTED STATE

  get selected(): boolean {

    if (
      this.selectedValue !== null &&
      this.selectedValue !== undefined
    ) {
      return this.value === this.selectedValue;
    }

    return this.internalSelected;
  }


  // CLICK

  onClick(event: MouseEvent): void {

    if (
      this.disabled ||
      !this.clickable
    ) {
      return;
    }


    // INDEPENDENT MODE

    if (
      this.selectedValue === null ||
      this.selectedValue === undefined
    ) {

      this.internalSelected =
        !this.internalSelected;

      this.clicked.emit(event);

      return;
    }


    // CONNECTED / GROUP MODE

    if (this.selected) {

      this.selectedValueChange.emit('');

    } else {

      this.selectedValueChange.emit(
        this.value
      );
    }

    // DEVELOPER CLICK EVENT

    this.clicked.emit(event);
  }
}