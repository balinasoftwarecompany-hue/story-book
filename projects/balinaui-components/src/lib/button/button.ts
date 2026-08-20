import {Component,EventEmitter,HostBinding,Input,Output} from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  // =========================================
  // INPUTS
  // =========================================

  @Input()
  label: string = 'Button';

  @Input()
  type:
    'button' | 'submit' | 'reset' = 'button';

  @Input()
  disabled: boolean = false;

  @Input()
  loading: boolean = false;

  /**
   * Controls whether the button is clickable.
   */
  @Input()
  clickable: boolean = true;

  /**
   * Developer custom CSS class.
   */
  @Input()
  @HostBinding('class')
  customClass: string = '';


  // =========================================
  // HOST CLASSES
  // =========================================

  @HostBinding('class.button-clickable')
  get buttonClickable(): boolean {
    return (
      this.clickable &&
      !this.disabled &&
      !this.loading
    );
  }


  @HostBinding('class.button-disabled')
  get buttonDisabled(): boolean {
    return (
      this.disabled ||
      this.loading
    );
  }


  // =========================================
  // OUTPUTS
  // =========================================

  /**
   * Developer click event.
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
      this.disabled ||
      this.loading ||
      !this.clickable
    ) {

      event.preventDefault();

      event.stopPropagation();

      return;
    }

    this.clicked.emit(event);
  }
}