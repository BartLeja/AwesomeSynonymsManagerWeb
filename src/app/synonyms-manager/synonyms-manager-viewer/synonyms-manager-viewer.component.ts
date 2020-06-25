import { Component, OnInit } from '@angular/core';
import { SynonymsManagerService } from '../services/synonyms-manager.service';
import { Word } from '../models/word.model';

@Component({
  selector: 'app-synonyms-manager-viewer',
  templateUrl: './synonyms-manager-viewer.component.html',
  styleUrls: ['./synonyms-manager-viewer.component.scss']
})
export class SynonymsManagerViewerComponent implements OnInit {
  public words: Word[];

  constructor(private synonymsManagerService: SynonymsManagerService) { }

  ngOnInit() {
    this.refreshWordList();
  }

  public refreshWordList() {
    this.synonymsManagerService.getWords().subscribe(w => this.words = w);
  }
}
