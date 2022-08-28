import { ArrayVacinas } from './array-vacinas';
import { CriancaVacina } from '../model/crianca-vacina';
import { Vacina } from '../model/vacina';
import { Crianca } from './../model/crianca';
export class ArrayCriancasTeste {

  criancas : Crianca[];

  constructor () {
    let vacinas = new ArrayVacinas().vacinas;
    let c1 = new Crianca(1, "João da Silva", "01/07/2012", "Menino", false, "Sul");
    c1.vacinas = [
      new CriancaVacina(vacinas[21]),
      new CriancaVacina(vacinas[20]),
      new CriancaVacina(new Vacina(22, "Influenza", "", 200, 10))
    ];
    let c2 = new Crianca(2, "Maria Joaquina", "27/08/2012", "Menina", false, "Sul");
    c2.vacinas = [
      new CriancaVacina(vacinas[21]),
      new CriancaVacina(vacinas[20]),
      new CriancaVacina(new Vacina(22, "Influenza", "", 200, 10))
    ];
    let c3 = new Crianca(3, "Joaquim Miguel Pereira", "18/01/2014", "Menino", false, "Sul");
    c3.vacinas = [
      new CriancaVacina(vacinas[21]),
      new CriancaVacina(vacinas[20]),
      new CriancaVacina(new Vacina(22, "Influenza", "", 200, 10))
    ];
    let c4 = new Crianca(4, "Rebeca de Andrade da Silva Pereira", "18/03/2010", "Menina", false, "Sul");
    c4.vacinas = [
      new CriancaVacina(vacinas[21]),
      new CriancaVacina(vacinas[20]),
      new CriancaVacina(new Vacina(22, "Influenza", "", 200, 10))
    ];
    this.criancas = [c1, c2, c3, c4];
  }
}
