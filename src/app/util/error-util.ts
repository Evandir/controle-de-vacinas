import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class ErrorUtil {
  public static handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    console.log(error);
    if (error.status === 0) {
      errorMessage = 'Opsss! Um problema inesperado aconteceu! (lado cliente)';
    } else {
      errorMessage = ErrorUtil.getServerErrorMessage(error);
    }

    //retorna um Error
    return throwError(() => new Error(errorMessage));
  }

  private static getServerErrorMessage(error: HttpErrorResponse) {
    switch (error.status) {
      case 404: {
        return `O recurso informado não foi encontrado!`;
      }
      case 403: {
        return `O acesso foi negado!`;
      }
      case 500: {
        return `Oppsss! Um erro inesperado aconteceu!`;
      }
      default: {
        return `Oppsss! Um erro inesperado aconteceu! Tente novamente mais tarde!`;
      }
    }
  }
}
