import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild,  OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { SynonymsManagerService } from '../services/synonyms-manager.service';
import { Word } from '../models/word.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-word-with-synonyms-dialog',
  templateUrl: './add-word-with-synonyms-dialog.component.html',
  styleUrls: ['./add-word-with-synonyms-dialog.component.scss']
})
export class AddWordWithSynonymsDialogComponent implements OnInit {
  public visible = true;
  public selectable = true;
  public removable = true;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public synonymCtrl = new FormControl();
  public synonyms: string[] = [];
  public term: string;

  @ViewChild('synonymInput') synonymInput: ElementRef<HTMLInputElement>;

  constructor(private synonymsManagerService: SynonymsManagerService,
              private dialogRef: MatDialogRef<AddWordWithSynonymsDialogComponent>) {}

  ngOnInit(): void {}

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.synonyms.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.synonymCtrl.setValue(null);
  }

  public remove(synonym: string): void {
    const index = this.synonyms.indexOf(synonym);

    if (index >= 0) {
      this.synonyms.splice(index, 1);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.synonyms.push(event.option.viewValue);
    this.synonymInput.nativeElement.value = '';
    this.synonymCtrl.setValue(null);
  }

  public addWord() {
    this.synonymsManagerService.addWord({synonyms: this.synonyms, term: this.term }).subscribe(
      x => {
        this.dialogRef.close();
      }
    );
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
