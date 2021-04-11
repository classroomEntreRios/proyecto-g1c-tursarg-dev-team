import { WidgetClimaService } from './../../services/widget-clima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-clima',
  templateUrl: './widget-clima.component.html',
  styleUrls: ['./widget-clima.component.css']
})
export class WidgetClimaComponent implements OnInit {


  // Por defecto Parana
  location = { cityName: 'Parana' };
  weather = undefined;

  constructor(private weatherService: WidgetClimaService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName);
  }

  getWeather(cityName: string) {
    this.weatherService
      .getWeather(cityName)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);

      cityName.value = '';
    } else {
      alert('Porfavor, ingrese una ciudad');
    }
    cityName.focus();
    return false;
  }

}

