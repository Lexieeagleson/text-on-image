import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TextOnImageComponent } from './text_on_image.component';

describe('TextOnImageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        TextOnImageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TextOnImageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'invoice-sheet'`, () => {
    const fixture = TestBed.createComponent(TextOnImageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('invoice-sheet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TextOnImageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, invoice-sheet');
  });
});
