import { Component , Input ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
    @Input() title: string = 'Last 24 hours';

  @Input() month: string = 'Jul';

  @Input() day: string | number = 9;

  @Input() description: string =
    '156 flights were monitored with 96.8% on-time performance. Minor delays occurred due to weather and air traffic.';

  @Output() cardClick = new EventEmitter<void>();

  onCardClick(): void {
    this.cardClick.emit();
  }
}
