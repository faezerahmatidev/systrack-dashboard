import { Component } from '@angular/core';
import { EButtonComponent } from '../shared/e-button/e-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [EButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
