import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {

}
