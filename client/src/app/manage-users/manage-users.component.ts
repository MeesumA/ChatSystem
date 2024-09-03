import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users = [
    { username: 'user1', role: 'user' },
    { username: 'user2', role: 'admin' }
    // Add more users as needed
  ];
}
