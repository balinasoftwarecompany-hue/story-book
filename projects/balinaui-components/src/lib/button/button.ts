import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
export type ButtonVariant =
  | 'solid'
  | 'outline'
  | 'ghost';

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'neutral'
  | 'light'
  | 'dark'
  | 'link';

export type ButtonSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  // CONTENT
  @Input() text = 'Button';
  // BUTTON TYPE
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  // VARIANT
  @Input() variant: ButtonVariant = 'solid';
  // STANDARD COLOR
  @Input() color: ButtonColor = 'primary';
  // CUSTOM COLORS
  @Input() customColor?: string;
  @Input() hoverColor?: string;
  @Input() activeColor?: string;
  @Input() textColor?: string;
  @Input() borderColor?: string;
  @Input() hoverTextColor?: string;
  @Input() activeTextColor?: string;
  @Input() disabledColor?: string;
  @Input() disabledTextColor?: string;
  @Input() disabledBorderColor?: string;
  // SIZE
  @Input() size: ButtonSize = 'md';
  // DISABLED
  @Input() disabled = false;
  // CLICK EVENT
  
  @Output() buttonClick = new EventEmitter<MouseEvent>();
  // CLICK HANDLER
  handleClick(event: MouseEvent): void {

    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.buttonClick.emit(event);
  }

  // CSS VARIABLES

  get buttonStyles(): Record<string, string> {

    const styles: Record<string, string> = {};

    if (this.customColor) {
      styles['--button-custom-color'] = this.customColor;
    }

    if (this.hoverColor) {
      styles['--button-hover-color'] = this.hoverColor;
    }

    if (this.activeColor) {
      styles['--button-active-color'] = this.activeColor;
    }

    if (this.textColor) {
      styles['--button-text-color'] = this.textColor;
    }

    if (this.borderColor) {
      styles['--button-border-color'] = this.borderColor;
    }

    if (this.hoverTextColor) {
      styles['--button-hover-text-color'] = this.hoverTextColor;
    }

    if (this.activeTextColor) {
      styles['--button-active-text-color'] = this.activeTextColor;
    }

    if (this.disabledColor) {
      styles['--button-disabled-color'] = this.disabledColor;
    }

    if (this.disabledTextColor) {
      styles['--button-disabled-text-color'] =
        this.disabledTextColor;
    }

    if (this.disabledBorderColor) {
      styles['--button-disabled-border-color'] =
        this.disabledBorderColor;
    }

    return styles;
  }
}