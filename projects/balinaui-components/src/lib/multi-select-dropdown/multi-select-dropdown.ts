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

  @Input() label: string = 'Add Parameters';

  @Input() options: MultiSelectOption[] = [];

  @Input() selectedValues: string[] = [];

  @Input() placeholder: string = 'Select options';

  @Input() customClass: string = '';

  @Input() disabled: boolean = false;


  isOpen: boolean = false;


  @HostBinding('class')
  get hostClasses(): string {

    return [
      this.customClass,
      this.disabled ? 'dropdown-disabled' : '',
      this.isOpen ? 'dropdown-open' : ''
    ]
      .filter(Boolean)
      .join(' ');
  }


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


  constructor(
    private elementRef: ElementRef
  ) {}toggle(event: MouseEvent): void {

    if (this.disabled) {
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
  }onOptionClick(
    option: MultiSelectOption,
    event: MouseEvent
  ): void {

    if (
      this.disabled ||
      option.disabled
    ) {
      return;
    }

    event.stopPropagation();


    const values =
      [...this.selectedValues];

    const index =
      values.indexOf(option.value);


    if (index === -1) {

      values.push(option.value);

    } else {

      values.splice(index, 1);
    }


    this.selectedValues =
      values;


    this.selectionChange.emit(
      [...values]
    );
  }isSelected(
    option: MultiSelectOption
  ): boolean {

    return this.selectedValues.includes(
      option.value
    );
  }get displayText(): string {
  return this.label;
}@HostListener(
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
      !this.elementRef.nativeElement
        .contains(target)
    ) {

      this.close();
    }
  }close(): void {

    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    this.closed.emit();
  }
}