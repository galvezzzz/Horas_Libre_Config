import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { BehaviorSubject } from 'rxjs';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { Component, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocation!: HousingLocation;

  url = 'http://localhost:3000/locations';
  private casasDisponibles = new BehaviorSubject<number>(0);
  casasDisponibles$ = this.casasDisponibles.asObservable();

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(housingLocation: HousingLocation, firstName: string, lastName: string, email: string) {

    if (housingLocation.availableUnits <= 0 && housingLocation.status === 'Disponible') {
      console.error('No hay unidades disponibles para reservar.');

    } else {
      housingLocation.availableUnits -= 1;
      housingLocation.status = 'Reservado';
      this.casasDisponibles.next(housingLocation.availableUnits);
      console.log(firstName, lastName, email);
    }
  }
}