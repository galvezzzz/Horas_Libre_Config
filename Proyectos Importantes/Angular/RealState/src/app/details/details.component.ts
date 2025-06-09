import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        <li *ngIf="housingLocation?.alarmas">Does this location have alarms: {{housingLocation?.alarmas}}</li>
        <li *ngIf="housingLocation?.camaras">Does this location have cameras: {{housingLocation?.camaras}}</li>
        <li *ngIf="housingLocation?.puertasReforzadas">Does this location have reinforced doors: {{housingLocation?.puertasReforzadas}}</li>
        <li *ngIf="housingLocation?.detectoresHumo">Does this location have smoke detectors: {{housingLocation?.detectoresHumo}}</li>
        <li>Status: {{housingLocation?.status}}</li>
      </ul>
    </section>
    <section *ngIf="housingLocation?.status === 'Disponible'" class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
`,
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }


  submitApplication() {
    this.housingService.submitApplication(
      this.housingLocation!,
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );

  }


  contadorCasasDisponibles: number = 0;

  ngOnInit() {
    
    this.housingService.casasDisponibles$.subscribe(casasDisponibles => {
      this.contadorCasasDisponibles = casasDisponibles;
    });
  }

}
