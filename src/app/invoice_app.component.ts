import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './invoice_app.component.html',
  styleUrl: './invoice_app.component.css'
})
export class InvoiceAppComponent  {
  text: string = '';

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
