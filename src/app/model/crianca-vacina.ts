import { Crianca } from './crianca';
import { Vacina } from './vacina';
export class CriancaVacina {
  id: number;
  crianca : Crianca;
  vacina : Vacina;
  recebida : boolean;
  dataRecebida : string;
  dataPlanejada : string;

  constructor (id : number, crianca : Crianca, vacina : Vacina) {
    this.id = id;
    this.crianca = crianca;
    this.vacina = vacina;
    this.recebida = false;
    let data = new Date(crianca.dataNascimento);
    data.setMonth(data.getMonth() + vacina.idade);
    this.dataPlanejada = data.toDateString();
    this.dataRecebida = "";
  }
}
