import {Component,Input,Output,EventEmitter,HostBinding} from '@angular/core';

@Component({
  selector: 'brb-graph-card',
  standalone: true,
  imports: [],
  templateUrl: './graph-card.html',
  styleUrl: './graph-card.css',
})
export class GraphCard {

  @Input() title: string = '';

  @Input() customClass: string = '';

  @Input() clickable: boolean = false;

  @Input() disabled: boolean = false;


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


  @Output()
  clicked =
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