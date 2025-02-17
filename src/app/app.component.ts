import { Component } from '@angular/core';
import { HeaderComponent } from './navigation/header/header.component';
import { HeroBannerComponent } from './sections/hero-banner/hero-banner.component';
import { AboutComponent } from './sections/about/about.component';
import { ServicesComponent } from './sections/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroBannerComponent,
    AboutComponent,
    ServicesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'spotless-planet-website';
}
