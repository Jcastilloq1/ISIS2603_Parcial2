import { Component, Input, OnInit } from '@angular/core';
import { RecetaDetail } from '../recetaDetail';
import { ActivatedRoute } from '@angular/router';
import { RecetaServiceService } from '../receta.service';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.css']
})
export class RecetaDetailComponent implements OnInit {

  recetaId!: string;

  @Input() recetaDetail!: RecetaDetail;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaServiceService) { }

    getReceta(){
      this.recetaService.getReceta(this.recetaId).subscribe(receta=>{
        this.recetaDetail = receta;
      })
    }
  
    ngOnInit() {
      if(this.recetaDetail === undefined){
        this.recetaId = this.route.snapshot.paramMap.get('id')!
        if(this.recetaId){
          this.getReceta();
        }
      }
    }
}
