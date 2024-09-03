import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-assign-channels',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './assign-channels.component.html',
  styleUrls: ['./assign-channels.component.css']
})
export class AssignChannelsComponent {
  channels = [
    { name: 'Channel 1', id: 1 },
    { name: 'Channel 2', id: 2 }
    // Add more channels as needed
  ];
}
