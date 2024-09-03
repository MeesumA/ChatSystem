import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html', // Use templateUrl instead of template
  // styleUrls: ['./login.component.css'] // If you have CSS for this component
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'super' && this.password === '123') {
      // Store user authentication state
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
