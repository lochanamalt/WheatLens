import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{

    @Output() selectedMarker = new EventEmitter();
    map!:  L.Map;

  private locations = [
  { id: 3, name: 'Cam 3', lng: -117.06308602736800, lat:	47.03353032791640},
  { id: 2, name: 'Cam 2', lng: -117.06332759589700, lat:	47.03319396664640},
  { id: 1, name: 'Cam 1', lng: -117.06355792938400, lat:	47.03283233654220},
  { id: 8, name: 'Cam 8', lng: -117.06250684621000, lat:	47.03350460506880},
  { id: 6, name: 'Cam 6', lng: -117.06303603243400, lat:	47.03290617564570},
  { id: 12, name: 'Cam 12', lng: -117.06253265598500, lat:	47.03258398503140},
  { id: 13, name: 'Cam 13', lng: -117.06175076556800, lat:	47.03258900466860},
  { id: 11, name: 'Cam 11', lng: -117.06230891840100, lat:	47.03284297954810},
  { id: 10, name: 'Cam 10', lng: -117.06225999302100, lat:	47.03315549137460},
  { id: 16, name: 'Cam 16', lng: -117.06061010320200, lat:	47.03331032127040},
  { id: 15, name: 'Cam 15', lng: -117.06129682512000, lat:	47.03333905988110},
  { id: 17, name: 'Cam 17', lng: -117.06102425953600, lat:	47.03302825201070},
  { id: 9, name: 'Cam 9', lng: -117.06182014194700, lat:	47.03349348939090},
  { id: 7, name: 'Cam 7', lng: -117.06283696313300, lat:	47.03320955480400},
  { id: 5, name: 'Cam 5', lng: -117.06317443066400, lat:	47.03250168201980},
  { id: 14, name: 'Cam 14', lng: -117.06165723906100, lat:	47.03308382333450},
  { id: 4, name: 'Cam 4', lng: -117.06335169144400, lat:	47.03296667394070}
  ]


  ngOnInit(): void {
    this.initMap();
  }

  private initMap() {
    this.map = L.map('map').setView([47.0331554913746, -117.062259993021], 18); // Washington State center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);


    this.locations.forEach(loc => {
      L.marker([loc.lat, loc.lng])
        .addTo(this.map)
        .bindTooltip(loc.name, { permanent: true, direction: 'top', className: 'marker-label' })
        .on('click', () => this.onMarkerClick(loc));
    });
  }

  onMarkerClick(location: any): void {
    console.log('Marker clicked:', location);
    this.selectedMarker.emit(location.id);
  }
}
