import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-time-filter',
  standalone: true,
  imports: [],
  templateUrl: './time-filter.html',
  styleUrl: './time-filter.css',
})
export class TimeFilter {


  @Input() label: string = '';

  @Input() value!: string;

  @Input() selectedValue!: string;

  @Output() selectedValueChange = new EventEmitter<string>();

  @Output() clicked = new EventEmitter<MouseEvent>();

  get selected(): boolean {
    return this.value === this.selectedValue;
  }

  onClick(event: MouseEvent): void {
    // Tell parent which value was selected
    this.selectedValueChange.emit(this.value);

    // Allow developer to handle their own click event
    this.clicked.emit(event);
  }
}
