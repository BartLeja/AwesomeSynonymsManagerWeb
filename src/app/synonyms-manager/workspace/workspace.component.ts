import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddWordWithSynonymsDialogComponent } from '../add-word-with-synonyms-dialog/add-word-with-synonyms-dialog.component';
import { SynonymsManagerViewerComponent } from '../synonyms-manager-viewer/synonyms-manager-viewer.component';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  @ViewChild(SynonymsManagerViewerComponent) private synonymsManagerViewerComponent: SynonymsManagerViewerComponent;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddWordWithSynonymsDialogComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.synonymsManagerViewerComponent.refreshWordList();
    });
  }
}
