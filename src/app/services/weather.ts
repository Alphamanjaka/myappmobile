import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeather(lat: number, lon: number) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY&units=metric`);
  }

  getAdvice(weather: any): string {
    const temp = weather.main.temp;
    const condition = weather.weather[0].main;

    if (condition === 'Rain') return 'Il pleut, prends un imperméable et des chaussures fermées.';
    if (temp > 30) return 'Il fait chaud, prévois des vêtements légers et de la crème solaire.';
    if (temp < 15) return 'Temps frais, pense à une veste ou un pull.';
    return 'Temps agréable, une tenue décontractée suffira.';
  }
}
