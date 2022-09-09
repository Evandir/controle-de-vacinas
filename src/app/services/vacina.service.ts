import { Injectable } from '@angular/core';
import { Vacina } from '../model/vacina';
import { VacinaPromiseService } from './vacina-promise.service';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private vacinaPromiseService: VacinaPromiseService) { }


}
