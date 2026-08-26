import {Component,EventEmitter,HostBinding,Input,Output} from '@angular/core';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

@Component({
  selector: 'brb-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {

  /*INPUTS*/

  @Input() items: BreadcrumbItem[] = [];

  @Input() customClass: string = '';

  @Input() clickable: boolean = true;

  @Input() disabled: boolean = false;


  /*CUSTOM CLASS + STATES*/

  @HostBinding('class')
  get hostClasses(): string {

    return [
      this.customClass,

      this.clickable
        ? 'breadcrumb-clickable'
        : '',

      this.disabled
        ? 'breadcrumb-disabled'
        : ''

    ]
      .filter(Boolean)
      .join(' ');
  }


  /*DEVELOPER EVENT*/

  @Output() clicked =
    new EventEmitter<{
      item: BreadcrumbItem;
      event: MouseEvent;
    }>();


  /* CLICK*/

  onClick(
    item: BreadcrumbItem,
    event: MouseEvent
  ): void {

    if (
      !this.clickable ||
      this.disabled
    ) {
      return;
    }

    this.clicked.emit({
      item,
      event
    });
  }
}