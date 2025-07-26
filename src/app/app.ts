import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  Name: string = 'Omar';
  Age: number = 30;
  Description: string =
    'A passionate developer with a love for coding and technology.';
  protected title = 'profile-card';
}
