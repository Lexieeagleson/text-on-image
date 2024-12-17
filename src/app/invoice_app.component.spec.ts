import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { InvoiceAppComponent } from './invoice_app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        InvoiceAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InvoiceAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'invoice-sheet'`, () => {
    const fixture = TestBed.createComponent(InvoiceAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('invoice-sheet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(InvoiceAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, invoice-sheet');
  });
});
