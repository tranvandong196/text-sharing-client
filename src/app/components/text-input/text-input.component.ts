import { Component, OnInit, Input } from '@angular/core';
import {PasteText} from '../../models/paste-text.model';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input() pasteText: PasteText;

  constructor() { }

  ngOnInit() {
  }

}
