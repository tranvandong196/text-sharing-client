import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { PasteTextService } from '../../services/paste-text.service';
import { PasteText } from '../../models/paste-text.model';

@Component({
  selector: 'app-paste-text',
  templateUrl: './paste-text.component.html',
  styleUrls: ['./paste-text.component.css']
})
export class PasteTextComponent implements OnInit {

  public languages;
  public pasteText;
  public pasteTextUrl;

  public username;
  public codeLanguage;
  public textInput;

  public formdata;

  public isSubmited = true;

  constructor(private pasteTextService: PasteTextService) { }

  ngOnInit() {
    this.getPasteText();
    this.getLanguages();


    this.username = new FormControl( '', Validators.required);
    this.codeLanguage = new FormControl();
    this.textInput = new FormControl('', Validators.required);

    this.formdata = new FormGroup({
      username: this.username,
      codeLanguage: this.codeLanguage,
      textInput: this.textInput
    });

  }

  getPasteText() {
    this.pasteTextService.getPasteText()
      .subscribe(pasteText => {
        this.pasteText = pasteText;
        this.pasteTextUrl = environment.API_URL + '/' + this.pasteText.hash;
        this.textInput.setValue(this.pasteText.content);
      });
  }

  getLanguages() {
    this.pasteTextService.getLanguages()
      .subscribe(languages => this.languages = languages);
  }

  onClickSubmit() {
    this.isSubmited = true;
    if (this.formdata.value.codeLanguage) {
      this.pasteText.language = this.formdata.value.codeLanguage;
    }

    this.pasteText.content = this.formdata.value.textInput;
    this.pasteText.createByGuest = this.formdata.value.username;
    // hash pasteText by CURRENT_TIME
  }

  onChangeLanguage(langId) {
    this.pasteText.language = langId;
    this.codeLanguage.setValue(parseInt(langId, 10));
    console.log(this.username.value);
    console.log(this.codeLanguage.value);
    console.log('Changed code language: ', this.pasteText);
  }

  editText() {
    this.isSubmited = !this.isSubmited;
    this.username.setValue('');
  }

  handleCopy() {
    this.copyTextToClipboard(environment.API_URL + '/' + this.pasteText.hash);
  }

  copyTextToClipboard(text) {
    const textArea = document.createElement('textarea');

    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
  }

}
