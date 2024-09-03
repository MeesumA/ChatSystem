import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/login">Login</a></li>
        <li><a routerLink="/dashboard">Dashboard</a></li>
        <li><a routerLink="/groups">Groups</a></li>
        <li><a routerLink="/channels">Channels</a></li>
        <li><a routerLink="/admin">Admin</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {}
