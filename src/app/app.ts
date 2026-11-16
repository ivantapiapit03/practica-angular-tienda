
import { Component } from '@angular/core';

// Interfaz que define la estructura de un producto
interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  // Información de la tienda
  nombreTienda: string = 'TecnoStore Bolivia';
  encargado: string = 'Ivan Tapia Mamani';
  numeroSucursal: number = 1;

  // Estado de la tienda
  tiendaAbierta: boolean = false;

  // Categorías de productos
  categorias: string[] = [
    'Celulares',
    'Computadoras',
    'Accesorios tecnológicos',
    'Tablets'
  ];

  // Información del producto
  producto: Producto = {
    nombre: 'Samsung Galaxy S25 Ultra',
    precio: 10500,
    disponible: false
  };

}
