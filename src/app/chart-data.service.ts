import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  url: string = `http://localhost:3000`;
  constructor(private http: HttpClient, private router: Router) {}
  getTasks = () => {
    return this.http.get(`${this.url}/chart`);
  };
}
