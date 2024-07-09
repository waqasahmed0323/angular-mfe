import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // if (this.authService.login(this.username, this.password)) {
    //   this.router.navigate(['/home']);
    // } else {
    //   this.errorMessage = 'Invalid username or password';
    // }
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
