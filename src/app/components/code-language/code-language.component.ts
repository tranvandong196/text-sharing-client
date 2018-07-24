import {Component, Input, OnInit} from '@angular/core';
import { PasteTextService } from '../../services/paste-text.service';
import {Language} from '../../models/language.model';

@Component({
  selector: 'app-code-language',
  templateUrl: './code-language.component.html',
  styleUrls: ['./code-language.component.css']
})
export class CodeLanguageComponent implements OnInit {

  public languages: Language[];
  @Input() selectedLang: number;

  constructor(private service: PasteTextService) { }

  ngOnInit() {
    this.languages = this.service.getLanguages();
  }

}
