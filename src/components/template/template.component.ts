import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  @Input() fileInput: any;


  finallyFile: any;

  ngOnChanges() {
    console.log('فایل دریافت شد:', this.fileInput);

    this.finallyFile = this.fileInput;
  }

}
