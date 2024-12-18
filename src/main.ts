import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TextOnImageModule } from './app/text_on_image.module';

platformBrowserDynamic().bootstrapModule(TextOnImageModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
