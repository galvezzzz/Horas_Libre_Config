import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    FormsModule,
    
  ],
  template: `
    <section>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
        <button type="button" (click)="cambiarForm()">Crear casa</button>
        <div *ngIf="showForm" class="form-container">
          <form (ngSubmit)="crearCasa($event)" #form="ngForm">
            <br>
            <h2>Crear nueva casa</h2>
            <br>
            <p>
              <label>
                Nombre:
                <input type="text" name="name"  required />
              </label>
            </p>
            <br>
            <p>
              <label>
                Ciudad:
                <input type="text" name="city"  required />
              </label>
            </p>
            <br>
            <p>
              <label>
                Estado:
                <input type="text" name="state"  required />
              </label>
            </p>
            <br>
            <p>
              <label>
                Unidades disponibles:
                <input type="number" name="availableUnits" required />
              </label>
            </p>
            <br>
            <p>
              <label>
                WiFi:
                <input type="checkbox" name="wifi"  />
              </label>
              <br>
              <label>
                Laundry:
                <input type="checkbox" name="laundry"  />
              </label>
              <br>
              <label>
                Alarmas:
                <input type="checkbox" name="alarmas"  />
              </label>
              <br>
              <label>
                Cámaras:
                <input type="checkbox" name="camaras"  />
              </label>
              <br>
              <label>
                Puertas reforzadas:
                <input type="checkbox" name="puertasReforzadas"  />
              </label>
              <br>
              <label>
                Detectores de humo:
                <input type="checkbox" name="detectoresHumo"  />
              </label>
              <br>
              <br>
              <label>
                <strong>Status: </strong>
                <input type="radio" name="status" value="Disponible" required />Disponible
                <input type="radio" name="status" value="Reservado" required />Reservado
                <input type="radio" name="status" value="Alquilado" required />Alquilado
                <input type="radio" name="status" value="Vendido" required />Vendido
              </label>
            </p>
            <br>
            <button type="submit">Guardar</button>
          </form>
        </div>
    </section>
    <section class="results">
    <app-housing-location 
      *ngFor="let housingLocation of filteredLocationList" 
      [housingLocation]="housingLocation">
    </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  showForm = false;

  cambiarForm() {
    if (this.showForm) {
      this.showForm = false;
      return;
    } else {
      this.showForm = true;
    }
  }

  crearCasa(event: Event): void {
    event.preventDefault();

    const form = document.querySelector('form');
    if (!form) return;

    const formData = new FormData(form);
    const newHouse: HousingLocation = {
      id: this.casasCreadas.length + 1,
      name: formData.get('name') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      photo: "https://i.pinimg.com/736x/7a/e4/c0/7ae4c0edfa493d273861f04819e29882.jpg",
      availableUnits: Number(formData.get('availableUnits')),
      wifi: formData.get('wifi') === 'on',
      laundry: formData.get('laundry') === 'on',
      alarmas: formData.get('alarmas') === 'on',
      camaras: formData.get('camaras') === 'on',
      puertasReforzadas: formData.get('puertasReforzadas') === 'on',
      detectoresHumo: formData.get('detectoresHumo') === 'on',
      status: formData.get('status') as string
    };

    this.casasCreadas.push(newHouse);
    this.housingLocationList.push(newHouse);
    this.showForm = false;
  }

  casasCreadas: HousingLocation[] = [

  ]
}