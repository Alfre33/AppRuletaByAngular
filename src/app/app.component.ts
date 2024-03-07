import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'Ruleta-JAGF';
    selectedSection: string='';
    rouletteOptions = [
      { value: 4,caballo:'rojo',fondo:'#dc143c'},
      { value: 2,caballo:'verde',fondo:'#03bb85'},
      { value: -2,caballo:'rojo',fondo:'#dc143c'},
      { value: -1,caballo:'verde',fondo:'#03bb85'},
      { value: 1,caballo:'rojo',fondo:'#dc143c'},
      { value: 5,caballo:'verde',fondo:'#03bb85'},
      { value: -5,caballo:'rojo',fondo:'#dc143c'},
      { value: -2,caballo:'verde',fondo:'#03bb85'},
      { value: 3,caballo:'rojo',fondo:'#dc143c'},
      { value: 1,caballo:'verde',fondo:'#03bb85'},
      { value: -3,caballo:'rojo',fondo:'#dc143c'},
      { value: -3,caballo:'verde',fondo:'#03bb85'},
    ];

  maxSpins = 10;
  minSpins = 1;
  maxDegrees = 360;
  minDegrees = 1;
    
  constructor(private renderer: Renderer2) {}

  getRandomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  spinRoulette(): void {
    const spins = this.getRandomNumber(this.minSpins, this.maxSpins);
    const degrees = this.getRandomNumber(this.minDegrees, this.maxDegrees);
  
    // Calculamos el índice de la sección seleccionada
    const sectionIndex = (spins - 1) % this.rouletteOptions.length;
  
    // Asignamos el valor de la sección seleccionada
    this.selectedSection = this.rouletteOptions[sectionIndex].caballo;
  
    // Calculamos el ángulo total de giro (sin retroceso)
    const fullSpins = spins * 360;
    const spin = fullSpins + degrees;
  
    const animationTime = spins;
  
    const roulette = document.querySelector("#roulette") as HTMLElement;
    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transitionDuration = `${animationTime}s`;
  }
  }
  