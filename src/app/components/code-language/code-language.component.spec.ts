import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLanguageComponent } from './code-language.component';

describe('CodeLanguageComponent', () => {
  let component: CodeLanguageComponent;
  let fixture: ComponentFixture<CodeLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
