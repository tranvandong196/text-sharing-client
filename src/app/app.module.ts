import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { CodeLanguageComponent } from './components/code-language/code-language.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { PasteTextComponent } from './components/paste-text/paste-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserNameComponent,
    CodeLanguageComponent,
    TextInputComponent,
    PasteTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
