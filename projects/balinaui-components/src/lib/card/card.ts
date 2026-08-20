import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  // =========================================
  // INPUTS
  // =========================================

  @Input()
  title: string = 'Last 24 hours';

  @Input()
  month: string = 'Jul';

  @Input()
  day: string | number = 9;

  @Input()
  description: string =
    '156 flights were monitored with 96.8% on-time performance. Minor delays occurred due to weather and air traffic.';

  /**
   * Developer custom CSS class.
   */
  @Input()
  customClass: string = '';

  /**
   * Controls whether the card is clickable.
   */
  @Input()
  clickable: boolean = true;

  /**
   * Disables card interaction.
   */
  @Input()
  disabled: boolean = false;


  // =========================================
  // OUTPUTS
  // =========================================

  /**
   * Legacy / specific card click event.
   */
  @Output()
  cardClick =
    new EventEmitter<void>();

  /**
   * Standard Balina UI developer click event.
   */
  @Output()
  clicked =
    new EventEmitter<MouseEvent>();


  // =========================================
  // CLICK HANDLER
  // =========================================

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