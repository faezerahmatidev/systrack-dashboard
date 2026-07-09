import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-e-button',
  standalone: true,
  imports: [],
  templateUrl: './e-button.component.html',
  styleUrl: './e-button.component.css',
})
export class EButtonComponent {
  @Input() type?: string;
  @Input({ required: true }) label!: string;
  @Input() icon?: string;
}
