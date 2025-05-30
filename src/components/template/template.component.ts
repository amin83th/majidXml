import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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

  isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  objectKeys(obj: any): string[] {
    debugger

    const ali = Object.keys(obj);

    return ali;

  }




}
