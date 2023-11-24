export class Receta {

    id: number;
    nombre: string;
    imagen: string[];
    estrellas: string;
    cantidadOpiniones: number;
    duracion: number;
    dificultad: string;
    autorReceta: string;

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
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.estrellas = estrellas;
        this.cantidadOpiniones  = cantidadOpiniones;
        this.duracion = duracion;
        this.dificultad = dificultad;
        this.autorReceta = autorReceta;
    } 
}
