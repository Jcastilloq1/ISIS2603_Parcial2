import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaDetail } from '../recetaDetail';
import { RecetaServiceService } from '../receta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas: Array<Receta> = [];
  selected: Boolean = false;
  selectedReceta!: RecetaDetail;

  constructor(private recetaService: RecetaServiceService, private router: Router) { }

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }

  ngOnInit(): void {
    this.getRecetas();
  }

  onSelected(receta: RecetaDetail): void {
    this.selected = true;
    this.selectedReceta = receta;

}
}
