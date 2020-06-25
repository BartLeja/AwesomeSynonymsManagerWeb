import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './synonyms-manager/workspace/workspace.component';

const routes: Routes = [
  { path: '',   redirectTo: '/synonyms-manager', pathMatch: 'full' },
  {
    path: 'synonyms-manager',
    component: WorkspaceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
