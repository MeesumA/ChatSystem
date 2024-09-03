import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-assign-groups',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './assign-groups.component.html',
  styleUrls: ['./assign-groups.component.css']
})
export class AssignGroupsComponent {
  groups = [
    { name: 'Group 1', id: 1 },
    { name: 'Group 2', id: 2 }
    // Add more groups as needed
  ];
}
