export class Crianca {
  nome : string;
  dataNascimento : string;
  sexo : string;
  alergia : boolean;
  regiao : string;

  constructor (nome : string, dataNascimento : string, sexo : string, alergia : boolean, regiao : string) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.sexo = sexo;
    this.alergia = alergia;
    this.regiao = regiao;
  }
}
