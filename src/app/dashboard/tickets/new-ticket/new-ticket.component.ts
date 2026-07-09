import { Component } from '@angular/core';
import { EButtonComponent } from '../../../shared/e-button/e-button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [EButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {}
