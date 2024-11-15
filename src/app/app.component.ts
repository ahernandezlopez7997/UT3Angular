import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaYHoraComponent} from './fecha-y-hora/fecha-y-hora.component';
import {GestorCookiesComponent} from './gestor-cookies/gestor-cookies.component';
import {NotasComponent} from './notas/notas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaYHoraComponent, GestorCookiesComponent, NotasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UT3EntregaAngular';
}
