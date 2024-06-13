import { Component } from '@angular/core';

@Component({
  selector: 'app-dji-drone',
  templateUrl: './dji-drone.component.html',
  styleUrls: ['./dji-drone.component.css']
})
export class DjiDroneComponent {
  djiSeriesimageList = [
    {
      src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+MINI+SERIES.png',
      alt: 'mini-series',
      link: 'dji-mini-series',
      title: 'Dji Mini Series'
    },
    {
      src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+MAVIC+SERIES.png',
      alt: 'mavic-series',
      link: 'dji-mavic-series',
      title: 'Dji Mavic Series'
    },
    {
      src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+AIR+SERIES.png',
      alt: 'air-series',
      link: 'dji-air-series',
      title: 'Dji Air Series'
    },
    {
      src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+AVATA+SERIES.png',
      alt: 'avata-series',
      link: 'dji-avata-series',
      title: 'Dji Avata Series'
    },
    {
      src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+FPV.png',
      alt: 'fpv-series',
      link: 'dji-fpv-series',
      title: 'Dji FPV Series'
    },
    {
      src: 'https://everse-assets.s3.amazonaws.com/dji-series/DJI+INSPIRE+SERIES.png',
      alt: 'inspire-series',
      link: 'dji-inspire-series',
      title: 'Dji Inspire Series'
    },
  ];
}
