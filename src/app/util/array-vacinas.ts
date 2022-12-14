import { Vacina } from './../model/vacina';
export class ArrayVacinas {

  vacinas : Vacina[];

  constructor() {
    this.vacinas = [
      {"id":1,"nome":"Hepatite B","previne":"Hepatite B","idade":0,"dose":1},
      {"id":2,"nome":"BCG-ID","previne":"Formas graves de tuberculose","idade":0,"dose":1},
      {"id":3,"nome":"Vacina Inativada Poliomelite (VIP)","previne":"Poliomielite inativada ou paralisia infantil","idade":2,"dose":1},
      {"id":4,"nome":"Pentavalente (DTP/HB/Hib)","previne":"Difteria, tétano, coqueluche e meningite por Haemophilus influenzae B. hepatite B","idade":2,"dose":1},
      {"id":5,"nome":"Vacina Oral de Rotavírus Humano (VORH)","previne":"Diarreia por rotavírus","idade":2,"dose":1},
      {"id":6,"nome":"Vacina Pneumocócica 10 (Conjugada)","previne":"Pneumonia, otite (inflamação de ouvido) e meningite","idade":2,"dose":1},
      {"id":7,"nome":"Vacina Meningocócica C (Conjugada)","previne":"Meningite e meningococcemia causadas pelo meningococo C","idade":3,"dose":1},
      {"id":8,"nome":"Vacina Inativada Poliomelite (VIP)","previne":"Poliomielite inativada ou paralisia infantil","idade":4,"dose":2},
      {"id":9,"nome":"Pentavalente (DTP/HB/Hib)","previne":"Difteria, tétano, coqueluche e meningite por Haemophilus influenzae B. hepatite B","idade":4,"dose":2},
      {"id":10,"nome":"Vacina Oral de Rotavírus Humano (VORH)","previne":"Diarreia por rotavírus","idade":4,"dose":2},
      {"id":11,"nome":"Vacina Pneumocócica 10 (Conjugada)","previne":"Pneumonia, otite (inflamação de ouvido) e meningite","idade":4,"dose":2},
      {"id":12,"nome":"Vacina Meningocócica C (Conjugada)","previne":"Meningite e meningococcemia causadas pelo meningococo C","idade":5,"dose":2},
      {"id":13,"nome":"Vacina Oral Poliomielite (VOP)","previne":"Poliomielite e paralisia infantil","idade":6,"dose":1},
      {"id":14,"nome":"Pentavalente (DTP/HB/Hib)","previne":"Difteria, tétano, coqueluche e meningite por Haemophilus influenzae B. hepatite B","idade":6,"dose":3},
      {"id":15,"nome":"Vacina Pneumocócica 10 (Conjugada)","previne":"Pneumonia, otite (inflamação de ouvido) e meningite","idade":6,"dose":3},
      {"id":16,"nome":"Tríplice Viral (VTV)","previne":"Sarampo, rubéola e caxumba","idade":12,"dose":2},
      {"id":17,"nome":"Vacina Pneumocócica 10 (Conjugada)","previne":"Pneumonia, otite (inflamação de ouvido) e meningite","idade":12,"dose":4},
      {"id":18,"nome":"Tríplice Bacteriana (DTP)","previne":"Difteria, tétano e coqueluche","idade":15,"dose":1},
      {"id":19,"nome":"Vacina Oral Poliomielite (VOP)","previne":"Poliomielite e paralisia infantil","idade":15,"dose":2},
      {"id":20,"nome":"Vacina Meningocócica C (Conjugada)","previne":"Meningite e meningococcemia causadas pelo meningococo C","idade":15,"dose":3},
      {"id":21,"nome":"Tríplice Bacteriana (DTP)","previne":"Difteria, tétano e coqueluche","idade":72,"dose":2},
      {"id":22,"nome":"Tríplice Viral (VTV)","previne":"Sarampo, rubéola e caxumba","idade":72,"dose":2}
    ]
  }
}
