import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lib-time-filter',
  standalone: true,
  imports: [],
  templateUrl: './time-filter.html',
  styleUrl: './time-filter.css'
})
export class TimeFilter {

  // =========================================
  // INPUTS
  // =========================================

  @Input() label: string = '';

  /**
   * Unique value of this time filter.
   */
  @Input() value: string = '';

  /**
   * Optional external selected value.
   *
   * If the developer connects this input,
   * multiple TimeFilters can work as a group.
   *
   * If it is not provided, the component
   * works independently.
   */
  @Input() selectedValue: string | null = null;

  /**
   * Developer custom CSS class.
   */
  @Input() customClass: string = '';

  /**
   * Allows the developer to enable/disable
   * click interaction.
   */
  @Input() clickable: boolean = true;

  /**
   * Disables the component.
   */
  @Input() disabled: boolean = false;


  // =========================================
  // OUTPUTS
  // =========================================

  /**
   * Emits selected value when the component
   * is used as a connected/group component.
   */
  @Output() selectedValueChange =
    new EventEmitter<string>();

  /**
   * Developer click event.
   */
  @Output() clicked =
    new EventEmitter<MouseEvent>();


  // =========================================
  // INTERNAL STATE
  // =========================================

  /**
   * Used when the component is working
   * independently.
   */
  private internalSelected: boolean = false;


  // =========================================
  // SELECTED STATE
  // =========================================

  get selected(): boolean {

    /*
     * If selectedValue is provided,
     * use the external value.
     */
    if (
      this.selectedValue !== null &&
      this.selectedValue !== undefined
    ) {
      return this.value === this.selectedValue;
    }

    /*
     * Otherwise use internal state.
     */
    return this.internalSelected;
  }


  // =========================================
  // CLICK
  // =========================================

  onClick(event: MouseEvent): void {

    if (
      this.disabled ||
      !this.clickable
    ) {
      return;
    }


    // =====================================
    // INDEPENDENT MODE
    // =====================================

    if (
      this.selectedValue === null ||
      this.selectedValue === undefined
    ) {

      this.internalSelected =
        !this.internalSelected;

      this.clicked.emit(event);

      return;
    }


    // =====================================
    // CONNECTED / GROUP MODE
    // =====================================

    if (this.selected) {

      this.selectedValueChange.emit('');

    } else {

      this.selectedValueChange.emit(
        this.value
      );
    }


    // =====================================
    // DEVELOPER CLICK EVENT
    // =====================================

    this.clicked.emit(event);
  }
}