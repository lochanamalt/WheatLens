import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {API_URL} from "./env";
import {DatePipe} from "@angular/common";
import {ImagesResponse} from "./data/images-response";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private getImagesUrl = `${API_URL}/api/images`

  constructor(private http: HttpClient,private datePipe: DatePipe) {}

  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(() => new Error(err.message || 'Something bad happened; please try again later.'));
  }

  getImages(site: string, date: Date, camera: number){
    const formatted_date = this.datePipe.transform(date, 'yyyy-MM-dd');

    if(!formatted_date) {
      return throwError(() => new Error('Formatted date cannot be null'));
    }

    const params = new HttpParams()
      .set('field', site)
      .set('date',  formatted_date)
      .set('camera', camera);



    return this.http.get<ImagesResponse>(this.getImagesUrl, { params })
      .pipe(
        catchError(ImagesService._handleError)
      );
  }

}
