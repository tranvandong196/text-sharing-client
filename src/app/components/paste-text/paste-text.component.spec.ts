import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteTextComponent } from './paste-text.component';

describe('PasteTextComponent', () => {
  let component: PasteTextComponent;
  let fixture: ComponentFixture<PasteTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
