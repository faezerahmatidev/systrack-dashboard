import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { NgClass } from '../../../../../node_modules/@angular/common/index';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {}
