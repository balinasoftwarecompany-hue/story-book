import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'brb-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  // INPUTS

  @Input()
  title: string = '';

  @Input()
  month: string = '';

  @Input()
  day: string | number = '';

  @Input()
  description: string = '';

  @Input()
  customClass: string = '';

  @Input()
  clickable: boolean = true;

  @Input()
  disabled: boolean = false;


  @HostBinding('class')
  get hostClasses(): string {

    return [
      this.customClass,

      this.clickable
        ? 'card-clickable'
        : '',

      this.disabled
        ? 'card-disabled'
        : ''

    ]
      .filter(Boolean)
      .join(' ');
  }


  // OUTPUTS
  @Output()
  cardClick =
    new EventEmitter<void>();

  @Output()
  clicked =
    new EventEmitter<MouseEvent>();


  // CLICK HANDLER

  onClick(
    event: MouseEvent
  ): void {

    if (
      !this.clickable ||
      this.disabled
    ) {

      event.preventDefault();

      event.stopPropagation();

      return;
    }

    // Standard developer event
    this.clicked.emit(event);

    // Card-specific event
    this.cardClick.emit();
  }
}