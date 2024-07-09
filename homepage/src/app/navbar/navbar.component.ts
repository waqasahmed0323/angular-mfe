import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  providers: [AuthService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent  {
  constructor(private authService: AuthService, private router: Router,private cdr: ChangeDetectorRef) {}

  logout() {
    this.authService.logout();
    this.cdr.detectChanges();  // Explicitly trigger change detection
    this.router.navigate(['/login']);
  }
}
