import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 36.898487, 10.188072 ],
      zoom: 40
      
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      
    });

    tiles.addTo(this.map);

    this.map.on('click', function(e) {
      alert("You clicked the map at " + e.latlng.toString());
     
       
     } );
  }
  
  constructor() { }
  

  ngAfterViewInit(): void {
    this.initMap();
  }
}