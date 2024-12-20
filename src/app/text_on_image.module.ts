import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextOnImageRoutingModule } from './text_on_image-routing.module';
import { TextOnImageComponent } from './text_on_image.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    TextOnImageComponent,
  ],
  imports: [
    BrowserModule,
    TextOnImageRoutingModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [TextOnImageComponent]
})
export class TextOnImageModule { }
