export class Vacina {
  public id : number;
  public nome : string;
  public previne : string;
  public idade : number;
  public dose : number;

  constructor (id : number, nome : string, previne : string, idade : number, dose : number) {
    this.id = id;
    this.nome = nome;
    this.previne = previne;
    this.idade = idade;
    this.dose = dose;
  }
}
