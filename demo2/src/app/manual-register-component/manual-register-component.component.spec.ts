import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualRegisterComponentComponent } from './manual-register-component.component';

describe('ManualRegisterComponentComponent', () => {
  let component: ManualRegisterComponentComponent;
  let fixture: ComponentFixture<ManualRegisterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualRegisterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualRegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
