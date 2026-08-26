import {Component,Input,Output,EventEmitter,HostBinding} from '@angular/core';

@Component({
  selector: 'brb-flight-card',
  standalone: true,
  imports: [],
  templateUrl: './flight-card.html',
  styleUrl: './flight-card.css',
})
export class FlightCard {

  @Input() flightNumber: string = '';

  @Input() route: string = '';

  @Input() date: string = '';

  @Input() airTime: string = '';

  @Input() description: string = '';


  @Input() clickable: boolean = false;

  @Input() disabled: boolean = false;

  @Input() customClass: string = '';


  @HostBinding('class')
  get hostClasses(): string {

    return [
      this.customClass,
      this.clickable ? 'flight-card-clickable' : '',
      this.disabled ? 'flight-card-disabled' : ''
    ]
      .filter(Boolean)
      .join(' ');
  }


  @Output() clicked =
    new EventEmitter<MouseEvent>();


  onClick(event: MouseEvent): void {

    if (
      !this.clickable ||
      this.disabled
    ) {
      return;
    }

    this.clicked.emit(event);
  }
}