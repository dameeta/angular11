import { componentFactoryName } from '@angular/compiler';
import { TestBed, async, ComponentFixture } from '@angular/core/testing'; // 1
import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component'; // Import TitleComponent

describe('TitleComponent', () => {
  let component :  TitleComponent;
  let fixture :ComponentFixture<TitleComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TitleComponent // Add TitleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-component-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-component-testing');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-component-testing!');
  });
  it('should correctly render the passed @Input value', () =>{
    component.message = 'Enter a title';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toBe('Enter a new title');

  })
  it('should correctly  @Output of text input in component', () =>{
    spyOn(component.changeTitleEvent,'emit');
    const button = fixture.nativeElement.querySelector('button');
    fixture.nativeElement.querySelector('input').value = 'A new title';
    const inputText = fixture.nativeElement.querySelector('input').value;
    button.click();
    expect(component.changeTitleEvent.emit).toHaveBeenCalledWith(inputText);

  })
});