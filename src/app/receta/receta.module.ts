import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RecetaListComponent, RecetaDetailComponent],
  declarations: [RecetaListComponent, RecetaDetailComponent]
})
export class RecetaModule { }
