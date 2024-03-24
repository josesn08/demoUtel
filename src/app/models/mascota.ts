export interface Mascota {
  id:number,
  nombre:string,
  propietario:string,
  fechaNac:Date,
  raza:string,
  color:string,
  genero:'Macho' | 'Hembra',
  //tipo de dato union con el operador pipe
  tipo:number,
  fotoUrl:string,
}
