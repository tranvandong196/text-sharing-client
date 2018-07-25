import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { PasteTextService } from '../../services/paste-text.service';
import { PasteText } from '../../models/paste-text.model';

@Component({
  selector: 'app-paste-text',
  templateUrl: './paste-text.component.html',
  styleUrls: ['./paste-text.component.css']
})
export class PasteTextComponent implements OnInit {

  public languages;
  public pasteText: PasteText;

  public username;
  public codeLanguage;
  public textInput;

  public formdata;

  public isSubmited = false;

  constructor(private service: PasteTextService) { }

  ngOnInit() {
    this.pasteText = this.service.getPasteText();
    this.languages = this.service.getLanguages();

    this.username = new FormControl( '', Validators.required);
    this.codeLanguage = new FormControl();
    this.textInput = new FormControl(this.pasteText.content, Validators.required);

    this.formdata = new FormGroup({
      username: this.username,
      codeLanguage: this.codeLanguage,
      textInput: this.textInput
    });

  }

  onClickSubmit() {
    this.isSubmited = true;
    if (this.formdata.value.codeLanguage) {
      this.pasteText.language = this.formdata.value.codeLanguage;
    }

    this.pasteText.content = this.formdata.value.textInput;
    this.pasteText.createByGuest = this.formdata.value.username;
    // hash pasteText by CURRENT_TIME
    console.log(this.pasteText);
  }

  onChangeLanguage(langId) {
    this.pasteText.language = langId;
    this.codeLanguage.setValue(parseInt(langId, 10));
    console.log(this.username.value);
    console.log(this.codeLanguage.value);
    console.log('Changed code language: ', this.pasteText);
  }

}
