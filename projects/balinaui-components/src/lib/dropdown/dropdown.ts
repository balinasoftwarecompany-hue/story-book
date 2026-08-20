import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  selector: 'lib-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class Dropdown {

  // =========================================
  // INPUTS
  // =========================================

  @Input() label: string = '';

  @Input() placeholder: string = 'Select';

  @Input() options: DropdownOption[] = [];

  @Input() value: string = '';

  @Input() disabled: boolean = false;

  @Input() searchable: boolean = true;

  @Input()
  @HostBinding('class')
  customClass: string = '';


  // =========================================
  // OUTPUTS
  // =========================================

  @Output()
  valueChange =
    new EventEmitter<string>();

  @Output()
  selectionChange =
    new EventEmitter<DropdownOption>();

  @Output()
  openedChange =
    new EventEmitter<boolean>();

  @Output()
  clicked =
    new EventEmitter<MouseEvent>();


  // =========================================
  // STATE
  // =========================================

  isOpen: boolean = false;

  searchText: string = '';


  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {}


  // =========================================
  // FILTERED OPTIONS
  // =========================================

  get filteredOptions(): DropdownOption[] {

    const search =
      this.searchText
        .trim()
        .toLowerCase();

    if (!search) {
      return this.options;
    }

    return this.options.filter(
      option =>
        option.label
          .toLowerCase()
          .includes(search)
    );
  }


  // =========================================
  // SELECTED OPTION
  // =========================================

  get selectedOption():
    DropdownOption | undefined {

    return this.options.find(
      option =>
        option.value === this.value
    );
  }


  // =========================================
  // TOGGLE
  // =========================================

  toggleDropdown(
    event?: MouseEvent
  ): void {

    if (this.disabled) {
      return;
    }

    if (event) {
      this.clicked.emit(event);
    }

    this.isOpen =
      !this.isOpen;

    this.openedChange.emit(
      this.isOpen
    );

    if (!this.isOpen) {
      this.searchText = '';
    }
  }


  // =========================================
  // DOCUMENT CLICK
  // =========================================

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

    const host =
      this.elementRef.nativeElement;

    if (!host.contains(target)) {
      this.closeDropdown();
    }
  }


  // =========================================
  // CLOSE
  // =========================================

  closeDropdown(): void {

    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    this.searchText = '';

    this.openedChange.emit(false);
  }


  // =========================================
  // SELECT
  // =========================================

  selectOption(
    option: DropdownOption,
    event: MouseEvent
  ): void {

    if (option.disabled) {
      return;
    }

    this.value =
      option.value;

    this.valueChange.emit(
      option.value
    );

    this.selectionChange.emit(
      option
    );

    this.clicked.emit(event);

    this.isOpen = false;

    this.searchText = '';

    this.openedChange.emit(false);
  }


  // =========================================
  // SEARCH
  // =========================================

  onSearch(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    this.searchText =
      input.value;
  }
}