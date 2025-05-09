import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetInputComponent } from "../components/get-input/get-input.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'majidXml';
}
