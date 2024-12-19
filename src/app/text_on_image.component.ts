import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './text_on_image.component.html',
  styleUrl: './text_on_image.component.css'
})
export class TextOnImageComponent  {
  title = 'textOnImage'
  billTo: string = '';
  date: string = '';
  invoiceNo: string = '';
  poBox: string = '';
  project: string = '';
  quantity: string = '';
  description: string = '';
  rate: string = '';
  amount: string = '';
  total: string = '';

  saveImage() {
    const element = document.querySelector('.image-container') as HTMLElement;
    if (element) {
      html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'updated-invoice-sheet.jpg';
        link.click();
      });
    } else {
      console.error('Element not found');
    }
  }
}
