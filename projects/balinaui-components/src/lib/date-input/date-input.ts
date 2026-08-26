import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'brb-date-input',
  standalone: true,
  imports: [],
  templateUrl: './date-input.html',
  styleUrl: './date-input.css'
})
export class DateInput {

  // INPUTS

  @Input() label: string = '';

  @Input() placeholder: string = '';

  @Input() value: string = '';

  @Input() disabled: boolean = false;

  @Input() readonly: boolean = false;

  /**
   * Developer custom CSS class.
   *
   * Example:
   *
   * customClass="flight-date"
   */
  @Input()
  @HostBinding('class')
  customClass: string = '';


  // OUTPUTS

  /**
   * Emits the selected date as:
   *
   * YYYY-MM-DD
   */
  @Output()
  valueChange =
    new EventEmitter<string>();

  /**
   * Emits the selected Date object.
   */
  @Output()
  dateChange =
    new EventEmitter<Date>();

  /**
   * Emits when the calendar opens/closes.
   */
  @Output()
  openedChange =
    new EventEmitter<boolean>();

  /**
   * Developer click event.
   */
  @Output()
  clicked =
    new EventEmitter<MouseEvent>();


  // INTERNAL STATE

  isOpen: boolean = false;

  currentDate: Date = new Date();


  constructor(
    private elementRef:
      ElementRef<HTMLElement>
  ) { }


  // INITIALIZE VALUE

  ngOnInit(): void {

    if (this.value) {

      const parsedDate =
        this.parseDate(this.value);

      if (parsedDate) {

        this.currentDate =
          new Date(
            parsedDate.getFullYear(),
            parsedDate.getMonth(),
            1
          );
      }
    }
  }


  // CALENDAR DAYS

  get calendarDays(): Date[] {

    const year =
      this.currentDate.getFullYear();

    const month =
      this.currentDate.getMonth();

    const firstDay =
      new Date(
        year,
        month,
        1
      );

    const lastDay =
      new Date(
        year,
        month + 1,
        0
      );

    const days: Date[] = [];

    const startDay =
      firstDay.getDay();


    // PREVIOUS MONTH DAYS

    for (
      let i = 0;
      i < startDay;
      i++
    ) {

      days.push(
        new Date(
          year,
          month,
          i - startDay + 1
        )
      );
    }


    // CURRENT MONTH DAYS

    for (
      let day = 1;
      day <= lastDay.getDate();
      day++
    ) {

      days.push(
        new Date(
          year,
          month,
          day
        )
      );
    }


    // NEXT MONTH DAYS

    const remaining =
      42 - days.length;

    for (
      let i = 1;
      i <= remaining;
      i++
    ) {

      days.push(
        new Date(
          year,
          month + 1,
          i
        )
      );
    }

    return days;
  }


  // MONTH NAME

  get monthName(): string {

    return this.currentDate.toLocaleString(
      'default',
      {
        month: 'long'
      }
    );
  }


  // YEAR

  get year(): number {

    return this.currentDate.getFullYear();
  }


  // TOGGLE CALENDAR

  toggleCalendar(
    event?: MouseEvent
  ): void {

    if (
      this.disabled ||
      this.readonly
    ) {
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
  }


  // PREVIOUS MONTH

  previousMonth(
    event?: MouseEvent
  ): void {

    event?.stopPropagation();

    this.currentDate =
      new Date(
        this.year,
        this.currentDate.getMonth() - 1,
        1
      );
  }


  // NEXT MONTH

  nextMonth(
    event?: MouseEvent
  ): void {

    event?.stopPropagation();

    this.currentDate =
      new Date(
        this.year,
        this.currentDate.getMonth() + 1,
        1
      );
  }

  // SELECT DATE

  selectDate(
    date: Date,
    event: MouseEvent
  ): void {

    event.stopPropagation();

    if (
      this.disabled ||
      this.readonly
    ) {
      return;
    }

    /*
     * Create a clean Date object.
     */
    const selectedDate =
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );


    // UPDATE VALUE

    this.value =
      this.formatDate(
        selectedDate
      );


    // EMIT EVENTS

    this.valueChange.emit(
      this.value
    );

    this.dateChange.emit(
      selectedDate
    );

    this.clicked.emit(
      event
    );


    // CLOSE

    this.isOpen = false;

    this.openedChange.emit(
      false
    );
  }


  // FORMAT DATE

  formatDate(
    date: Date
  ): string {

    const day =
      String(
        date.getDate()
      ).padStart(2, '0');

    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, '0');

    const year =
      date.getFullYear();

    return `${year}-${month}-${day}`;
  }


  // PARSE DATE

  private parseDate(
    value: string
  ): Date | null {

    const parts =
      value.split('-');

    if (parts.length !== 3) {
      return null;
    }

    const year =
      Number(parts[0]);

    const month =
      Number(parts[1]);

    const day =
      Number(parts[2]);

    if (
      !year ||
      !month ||
      !day
    ) {
      return null;
    }

    const date =
      new Date(
        year,
        month - 1,
        day
      );

    /*
     * Validate the date.
     */
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return null;
    }

    return date;
  }


  // CURRENT MONTH

  isCurrentMonth(
    date: Date
  ): boolean {

    return (
      date.getMonth() ===
      this.currentDate.getMonth() &&
      date.getFullYear() ===
      this.currentDate.getFullYear()
    );
  }


  // TODAY

  isToday(
    date: Date
  ): boolean {

    const today =
      new Date();

    return (
      date.getDate() ===
      today.getDate() &&
      date.getMonth() ===
      today.getMonth() &&
      date.getFullYear() ===
      today.getFullYear()
    );
  }


  // SELECTED DATE

  isSelected(
    date: Date
  ): boolean {

    return (
      this.value ===
      this.formatDate(date)
    );
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

    const host =
      this.elementRef.nativeElement;

    if (
      !host.contains(target)
    ) {

      this.closeCalendar();
    }
  }


  // CLOSE CALENDAR

  closeCalendar(): void {

    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    this.openedChange.emit(
      false
    );
  }
}