import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
@Component({
  selector: 'app-add-billing',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './add-billing.component.html',
  styleUrl: './add-billing.component.css'
})
export class AddBillingComponent {

}
