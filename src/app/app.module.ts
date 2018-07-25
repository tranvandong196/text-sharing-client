import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PasteTextComponent } from './components/paste-text/paste-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PasteTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
