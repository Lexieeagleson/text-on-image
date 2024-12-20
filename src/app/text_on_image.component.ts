import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './text_on_image.component.html',
  styleUrl: './text_on_image.component.css'
})
export class TextOnImageComponent {
  title = 'Blank Invoice'
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

  constructor(private datePipe: DatePipe) {}

  saveImage(): void {
    
    const element = document.querySelector('.image-container') as HTMLElement;
    if (element) {
      html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        let imageName = this.getImageName();
        link.download = imageName;
        link.click();
      });
    } else {
      console.error('Element not found');
    }
  }

  getImageName(): string {
    let imageName = 'zeke_transport_invoice';
    const currentDate = new Date();
    let formattedDate = this.datePipe.transform(currentDate, 'MMddyyyy');

    if (!!this.billTo) {
      imageName = this.billTo.replace(/\s+/g, '');
    }
    if(!!formattedDate) {
      imageName = imageName + '_' + formattedDate;
    }
    return imageName;
  }

  resetForm(): void {
    this.billTo = '';
    this.amount = '';
    this.date = '';
    this.invoiceNo = '';
    this.poBox = '';
    this.project = '';
    this.description = '';
    this.rate = '';
    this.quantity = '';
    this.amount = '';
  }
}
