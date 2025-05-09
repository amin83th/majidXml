import { Component, EventEmitter, Output } from '@angular/core';
import { XMLParser } from "fast-xml-parser";
import { HandleErrorService } from '../../services/handle-eror/handle-error.service';

@Component({
  selector: 'app-get-input',
  imports: [],
  templateUrl: './get-input.component.html',
  styleUrl: './get-input.component.css'
})
export class GetInputComponent {
  @Output() fileOutput = new EventEmitter<any>();

  reader = new FileReader();
  parser = new XMLParser();
  fileResult: any;


  constructor(private handleError: HandleErrorService) { }

  formHandle(event: Event): void {
    event.preventDefault();
  }

  getFile(event: any): void {
    const file = event.target.files[0];

    this.reader.onload = () => {
      const readed = this.reader.result as string;
      const parsed = this.parser.parse(readed);
      this.fileResult = parsed;
    }

    this.reader.readAsText(file);

  }

  create(): void {
    if (this.fileResult) {
      this.fileOutput.emit(this.fileResult);
      this.handleError.showSuccess("Success")
    }
    else {
      this.handleError.showError("Input File Is Empty !")

    }
  }
}
