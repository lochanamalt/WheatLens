import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {EnvironmentService} from "../environment.service";
import {catchError, throwError} from "rxjs";
import {TimeSeriesResponse} from "../data/time-series-response";
import {ViType} from "../data/vi-type";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  private getDailyVIData = ``
  private getDailyCanopyTemperatureData = ``

  apiUrl: string;

  constructor(private http: HttpClient,private datePipe: DatePipe,private environmentService: EnvironmentService) {
    this.apiUrl = this.environmentService.apiUrl;
    this.getDailyVIData = `${this.apiUrl}/api/daily-vi-data`
    this.getDailyCanopyTemperatureData = `${this.apiUrl}/api/daily-temperature-data`
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(() => new Error(err.message || 'Something bad happened; please try again later.'));
  }

  getInfluxDBVIData(vi: ViType){
    const params = new HttpParams()
      .set('vi', vi);

    return this.http.get<TimeSeriesResponse>(this.getDailyVIData, {params: params})
      .pipe(
        catchError(ChartsService._handleError)
      );
  }
  getInfluxDBTemperatureData(){
    return this.http.get<TimeSeriesResponse>(this.getDailyCanopyTemperatureData, {})
      .pipe(
        catchError(ChartsService._handleError)
      );
  }
}
