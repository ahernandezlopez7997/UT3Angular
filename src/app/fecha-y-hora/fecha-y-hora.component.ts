import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fecha-y-hora',
  standalone: true,
  imports: [],
  templateUrl: './fecha-y-hora.component.html',
  styleUrl: './fecha-y-hora.component.css'
})
export class FechaYHoraComponent implements OnInit{

  fechaHoraActual: string = '';

  constructor() {
  }

  ngOnInit() {
    this.actualizarFechaHora();
    setInterval(() => {
      this.actualizarFechaHora();
    }, 1000); // Actualiza cada segundo
  }

  actualizarFechaHora() {
    const ahora = new Date();
    const dia = this.pad(ahora.getDate());
    const mes = this.pad(ahora.getMonth() + 1); // Los meses empiezan en 0
    const anio = ahora.getFullYear();
    const hora = this.pad(ahora.getHours());
    const minuto = this.pad(ahora.getMinutes());
    const segundo = this.pad(ahora.getSeconds());

    this.fechaHoraActual = `${dia}/${mes}/${anio} ${hora}:${minuto}:${segundo}`;
  }

  private pad(numero: number): string {
    return numero < 10 ? '0' + numero : numero.toString();
  }

}
