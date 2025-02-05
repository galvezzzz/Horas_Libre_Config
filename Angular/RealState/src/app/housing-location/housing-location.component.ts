import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrl: './housing-location.component.css'
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
