import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetInputComponent } from "../components/get-input/get-input.component";
import { TemplateComponent } from "../components/template/template.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetInputComponent, TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'majidXml';
  file: any;

  getFile(event: any) {
    this.file = event;
  }
}
