import {Component,Input,Output,EventEmitter,HostBinding,HostListener,ElementRef} from '@angular/core';

export interface MultiSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  selector: 'brb-multi-select-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './multi-select-dropdown.html',
  styleUrl: './multi-select-dropdown.css',
})
export class MultiSelectDropdown {

  // INPUTS

  @Input() label: string = 'Add Parameters';

  @Input() options: MultiSelectOption[] = [];

  @Input() selectedValues: string[] = [];

  @Input() placeholder: string = 'Select options';

  /*
   * TRUE  = show checkbox
   * FALSE = hide checkbox
   */
  @Input() useCheckbox: boolean = true;

  @Input() customClass: string = '';

  @Input() clickable: boolean = true;

  @Input() disabled: boolean = false;


  // STATE

  isOpen: boolean = false;


  // HOST CLASSES

  @HostBinding('class')
  get hostClasses(): string {

    return [
      this.customClass,

      this.clickable
        ? 'dropdown-clickable'
        : '',

      this.disabled
        ? 'dropdown-disabled'
        : '',

      this.isOpen
        ? 'dropdown-open'
        : ''

    ]
      .filter(Boolean)
      .join(' ');
  }


  // EVENTS

  @Output()
  selectionChange =
    new EventEmitter<string[]>();

  @Output()
  opened =
    new EventEmitter<void>();

  @Output()
  closed =
    new EventEmitter<void>();

  @Output()
  clicked =
    new EventEmitter<MouseEvent>();


  // CONSTRUCTOR

  constructor(
    private elementRef: ElementRef
  ) {}


  // TOGGLE

  toggle(event: MouseEvent): void {

    if (
      this.disabled ||
      !this.clickable
    ) {
      return;
    }

    event.stopPropagation();

    this.clicked.emit(event);

    this.isOpen = !this.isOpen;

    if (this.isOpen) {

      this.opened.emit();

    } else {

      this.closed.emit();

    }
  }


  // OPTION CLICK

  onOptionClick(
    option: MultiSelectOption,
    event: MouseEvent
  ): void {

    if (
      this.disabled ||
      option.disabled ||
      !this.clickable
    ) {
      return;
    }

    event.stopPropagation();

    const values =
      [...this.selectedValues];

    const index =
      values.indexOf(option.value);


    // ADD
    if (index === -1) {

      values.push(option.value);

    }

    // REMOVE
    else {

      values.splice(index, 1);

    }


    this.selectedValues =
      values;


    this.selectionChange.emit(
      [...values]
    );
  }


  // CHECK SELECTED

  isSelected(
    option: MultiSelectOption
  ): boolean {

    return this.selectedValues
      .includes(option.value);
  }


  // DISPLAY TEXT

  get displayText(): string {

    return this.label;
  }


  // OUTSIDE CLICK

  @HostListener(
    'document:click',
    ['$event']
  )
  onDocumentClick(
    event: MouseEvent
  ): void {

    if (!this.isOpen) {
      return;
    }

    const target =
      event.target as Node;

    if (
      !this.elementRef
        .nativeElement
        .contains(target)
    ) {

      this.close();
    }
  }


  // CLOSE

  close(): void {

    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    this.closed.emit();
  }
}