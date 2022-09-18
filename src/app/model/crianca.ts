import { CriancaVacina } from "./crianca-vacina";

export class Crianca {
  id : number;
  nome : string;
  dataNascimento : string;
  sexo : string;
  alergia : boolean;
  regiao : string;
  // criancaVacinas : CriancaVacina[];

  constructor (id : number, nome : string, dataNascimento : string, sexo : string, alergia : boolean, regiao : string) {
    this.id = id;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.sexo = sexo;
    this.alergia = alergia;
    this.regiao = regiao;
    // this.criancaVacinas = [];
  }
}
