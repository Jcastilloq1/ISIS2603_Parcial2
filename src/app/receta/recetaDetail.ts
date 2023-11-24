import { Receta } from "./receta"

export class RecetaDetail extends Receta{
    

    constructor(
        id:number,
        nombre:string,
        imagen: string[],
        estrellas: string,
        cantidadOpiniones: number,
        duracion: number,
        dificultad: string,
        autorReceta: string,
    ){
        super(id, nombre, imagen, estrellas, cantidadOpiniones, duracion, dificultad, autorReceta)
    }
}
