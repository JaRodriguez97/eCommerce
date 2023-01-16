import { LowerCasePipe } from '@angular/common';
import { ValidationErrors } from '@angular/forms';

export interface datosPedidoInterface {
  nombre: (String | ValidationErrors | null)[];
  apellido: (String | ValidationErrors | null)[];
  email: (String | LowerCasePipe | ValidationErrors | null)[];
  fechaHora: (String | ValidationErrors | null)[];
  celular: (Number | ValidationErrors | null)[];
  direccion: (String | ValidationErrors | null)[];
  detallesUbicacion: (String | ValidationErrors | null)[];
  detallesPedido: (String | ValidationErrors | null)[];
}
