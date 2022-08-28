import { Vacina } from './vacina';
import { Crianca } from './crianca';
import { Datepicker } from 'materialize-css';
export class CriancaVacina {
  vacina : Vacina;
  recebida : boolean;
  dataRecebida : string;
  dataPlanejada : string;

  constructor (vacina : Vacina) {
    this.vacina = vacina;
    this.recebida = false;
    this.dataPlanejada = new Date().toDateString();
    this.dataRecebida = "";
  }
}
