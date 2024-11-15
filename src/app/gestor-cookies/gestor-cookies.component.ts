import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-gestor-cookies',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './gestor-cookies.component.html',
  styleUrl: './gestor-cookies.component.css'
})
export class GestorCookiesComponent {
  nombreUsuario: string = '';
  nombreTemporal: string = ''; // Este representa el valor en el formulario (sin guardar).
  cookieKey = 'nombreUsuario';

  constructor(private cookieService: CookieService) {
    this.verificarCookie();
  }

  verificarCookie(): void {
    const cookieValue = this.cookieService.get(this.cookieKey);
    if (cookieValue) {
      this.nombreUsuario = cookieValue; // Si existe la cookie, recupera el valor
      this.nombreTemporal = cookieValue; // Inicializa el formulario con el valor de la cookie
    }
  }

  guardarNombre(): void {
    if (this.nombreTemporal && this.nombreTemporal.trim().length > 0) {
      const fechaExpiracion = new Date();
      fechaExpiracion.setDate(fechaExpiracion.getDate() + 1); // Establece duración de 1 día
      this.cookieService.set(this.cookieKey, this.nombreTemporal, fechaExpiracion);
      this.nombreUsuario = this.nombreTemporal; // Actualiza el valor guardado
    }
  }
}
