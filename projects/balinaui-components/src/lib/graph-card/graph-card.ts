import {Component,Input,Output,EventEmitter,HostBinding} from '@angular/core';

@Component({
  selector: 'brb-graph-card',
  standalone: true,
  imports: [],
  templateUrl: './graph-card.html',
  styleUrl: './graph-card.css',
})
export class GraphCard {

  // INPUTS

  @Input() title: string = '';

  @Input() customClass: string = '';

  @Input() clickable: boolean = false;

  @Input() disabled: boolean = false;

  // HOST CLASSES
  @HostBinding('class')
  get hostClasses(): string {

    return [
      this.customClass,

      this.clickable
        ? 'graph-card-clickable'
        : '',

      this.disabled
        ? 'graph-card-disabled'
        : ''

    ]
      .filter(Boolean)
      .join(' ');
  }

  // OUTPUT
  @Output() clicked =
    new EventEmitter<MouseEvent>();

  // CLICK

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