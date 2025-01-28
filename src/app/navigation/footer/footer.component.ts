import {
  Component,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { cursorTo } from 'readline';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements AfterViewInit {
  contactInfo = [
    {
      icon: 'icon__phone',
      id: 'phone-number',
      text: 'Telephone: ',
      anchor: '555-555-5555',
      href: 'tel:5555555555',
      clickable: true,
    },
    {
      icon: 'icon__email',
      id: 'email-address',
      text: 'Email: ',
      anchor: 'info@spotlessplanet.com',
      href: 'mailto:info@spotlessplanet.com',
      clickable: true,
    },
    {
      icon: 'icon__calendar',
      id: 'business-hours',
      text: 'Hours:',
      anchor: '<br>Mon - Sat: 8:00 am - 6:00 pm,<br>Sun: Closed',
      href: '#',
      clickable: false,
    },
  ];
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    const links =
      this.elementRef.nativeElement.querySelectorAll('.obfuscated-link');
    links.forEach((link) => {
      const href = link.getAttribute('data-href');
      if (href) {
        this.renderer.setAttribute(link, 'href', href);
        this.cd.detectChanges();
      }
    });
  }
}
