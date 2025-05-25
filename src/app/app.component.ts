import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOption: string = '';
  darkMode: boolean = false;

  onOption(menuOption:string){
    this.menuOption = menuOption;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}