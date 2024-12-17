import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { InvoiceAppModule } from './app/invoice_app.module';

platformBrowserDynamic().bootstrapModule(InvoiceAppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
