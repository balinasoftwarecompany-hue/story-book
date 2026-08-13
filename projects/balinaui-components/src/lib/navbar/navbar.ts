import { Component, ElementRef, HostListener, Input, Output, ViewEncapsulation, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
export interface NavLink {
  label: string;
  url: string;
}

export interface UserProfile {
  name: any;
  username: string;
  email: string;
  image?: string;
  role?: string;
  initials?: string;
}
@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // Brand
  @Input() brand = 'Aero';

  @Input() logoAlt = 'Aero logo';

  @Input() image = '';

  // Navigation
  @Input() links: NavLink[] = [];

  // Authentication
  @Input() initiallyLoggedIn = false;

  // User profile
  @Input() user: UserProfile = {
    username: 'Guest User',
    email: 'guest@example.com',
    image: '',
    role: 'Guest',
    name: undefined
  };

  // Icons
  @Input() notificationIcon = 'notifications';

  @Input() profileIcon = 'account_circle';

  @Input() userIcon = 'person';

  @Input() logoutIcon = 'logout';

  // Events
  @Output() login = new EventEmitter<void>();

  @Output() logout = new EventEmitter<void>();

  isLoggedIn = false;
  isDropdownOpen = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.isLoggedIn = this.initiallyLoggedIn;
  }

  handleLoginClick(): void {
    this.isLoggedIn = true;
    this.login.emit();
  }

  handleProfileClick(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  handleLogoutClick(): void {
    this.isLoggedIn = false;
    this.isDropdownOpen = false;
    this.logout.emit();
  }

  @HostListener('document:mousedown', ['$event'])
  onDocumentClick(event: MouseEvent): void {

    if (
      this.isDropdownOpen &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.isDropdownOpen = false;
    }
  }
}
