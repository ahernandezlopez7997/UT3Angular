import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

interface Estudiante{
  nombre: string;
  nota: number;
  estado: string;
}
@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  displayedColumns: string[] = ['nombre', 'nota', 'estado']; // Columnas a mostrar en la tabla
  estudiantes: Estudiante[] = [
    {nombre: 'Juan Romero', nota: 5, estado: 'Aprobado'},
    {nombre: 'Pedro Dominguez', nota: 4, estado: 'Suspenso'},
    { nombre: 'Juan Pérez', nota: 8, estado: 'Aprobado' },
    { nombre: 'Ana Gómez', nota: 4, estado: 'Suspenso' },
    { nombre: 'Luis Martínez', nota: 6, estado: 'Aprobado' },
  ];
  dataSource = new MatTableDataSource(this.estudiantes); // Datos de la tabla

  // Filtros
  filtroNombre: string = '';
  filtroEstado: string = '';

  // Agregar estudiante
  nuevoEstudiante: Estudiante = {nombre: '', nota: 0, estado: ''};

  aplicarFiltros() {
    this.dataSource.filterPredicate = (data: Estudiante, filter: string) => {
      const [nombre, estado] = filter.split('|');
      const coincideNombre = !nombre || data.nombre.toLowerCase().includes(nombre.toLowerCase());
      const coincideEstado = !estado || data.estado === estado;
      return coincideNombre && coincideEstado;
    }

    this.dataSource.filter = `${this.filtroNombre}|${this.filtroEstado}`;
  }

  agregarEstudiante() {
    if (this.nuevoEstudiante.nombre.trim() && this.nuevoEstudiante.nota >= 0) {
      this.nuevoEstudiante.estado =
        this.nuevoEstudiante.nota >= 5 ? 'Aprobado' : 'Suspenso';
      this.estudiantes.push({...this.nuevoEstudiante});
      this.dataSource.data = this.estudiantes;
      this.nuevoEstudiante = {nombre: '', nota: 0, estado: ''};
    }
  }
}
