import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent implements OnInit {
  drones: any[] = [
    { image: 'assets/img/social-media/facebook-logo.png', radius: '150px' }, // Set the radius for each planet
    { image: 'assets/img/social-media/instagram-logo.png', radius: '200px' },
    { image: 'assets/img/social-media/linkedin-logo.png', radius: '250px' },
    // Add more drone images as needed with different radii
  ];

  getPlanetTransform(index: number): string {
    const angle = (360 / this.drones.length) * index;
    return `--planet-radius: ${this.drones[index].radius}; rotate(${angle}deg)`;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
