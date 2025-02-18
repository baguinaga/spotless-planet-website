import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navLinks = [
    {
      text: 'About',
      href: 'about',
      default: false,
    },
    {
      text: 'Services',
      href: 'services',
      default: false,
    },
    {
      text: 'Contact',
      href: 'contact',
      default: false,
    },
  ];
}
