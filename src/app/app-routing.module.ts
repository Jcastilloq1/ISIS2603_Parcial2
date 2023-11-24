import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaListComponent } from './receta/receta-list/receta-list.component';

const routes: Routes = [
  { path: '', component: RecetaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
