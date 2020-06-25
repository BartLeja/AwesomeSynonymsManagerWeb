import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SynonymsManagerViewerComponent } from './synonyms-manager-viewer/synonyms-manager-viewer.component';
import { MatCardModule, MatChipsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule,
   MatIconModule,
   MatAutocompleteModule} from '@angular/material';
import { AddWordWithSynonymsDialogComponent } from './add-word-with-synonyms-dialog/add-word-with-synonyms-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorkspaceComponent, SynonymsManagerViewerComponent, AddWordWithSynonymsDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  entryComponents: [AddWordWithSynonymsDialogComponent],
})
export class SynonymsManagerModule { }
