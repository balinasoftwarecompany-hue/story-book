import { Component,ElementRef,HostListener,Input,Output,ViewEncapsulation, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() brand = 'Aero';
  @Input() links: string[] = ['Contact Us', 'Parameter'];
  @Input() initiallyLoggedIn = false;
  @Input() userName = 'Guest User';
  @Input() userEmail = 'guest@example.com';
  
  @Input()image = 'https://i.pinimg.com/1200x/4a/57/0c/4a570c4e8dbb4729567848eb69c19055.jpg';

  @Output() login = new EventEmitter();
  @Output() logout = new EventEmitter();

  isLoggedIn = false;
  isDropdownOpen = false;
Aerologo: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.isLoggedIn = this.initiallyLoggedIn;
  }

  handleLoginClick() {
    this.isLoggedIn = true;
    this.login.emit();
  }

  handleProfileClick() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  handleLogoutClick() {
    this.isLoggedIn = false;
    this.isDropdownOpen = false;
    this.logout.emit();
  }

  // Close the dropdown when clicking outside of it
  @HostListener('document:mousedown', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isDropdownOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}
