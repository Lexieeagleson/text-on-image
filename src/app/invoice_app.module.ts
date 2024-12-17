import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './invoice_app-routing.module';
import { InvoiceAppComponent } from './invoice_app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InvoiceAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [InvoiceAppComponent]
})
export class InvoiceAppModule { }
