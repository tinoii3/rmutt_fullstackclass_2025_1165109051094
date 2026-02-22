import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-navbar-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  auth = inject(AuthService);

  logout() {
    this.auth.logout();
  }
}
