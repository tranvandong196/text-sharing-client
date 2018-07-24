import { Component, OnInit } from '@angular/core';
import { PasteTextService } from '../../services/paste-text.service';
import { PasteText } from '../../models/paste-text.model';

@Component({
  selector: 'app-paste-text',
  templateUrl: './paste-text.component.html',
  styleUrls: ['./paste-text.component.css']
})
export class PasteTextComponent implements OnInit {

  public pasteText: PasteText;

  constructor(private service: PasteTextService) { }

  ngOnInit() {
    this.pasteText = this.service.getPasteText();
  }

}
