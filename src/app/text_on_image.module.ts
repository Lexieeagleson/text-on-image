import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextOnImageRoutingModule } from './text_on_image-routing.module';
import { TextOnImageComponent } from './text_on_image.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TextOnImageComponent,
  ],
  imports: [
    BrowserModule,
    TextOnImageRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [TextOnImageComponent]
})
export class TextOnImageModule { }
