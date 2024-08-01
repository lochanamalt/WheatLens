import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }
  get apiUrl(): string {
    console.log(environment.production)
    return environment.apiUrl;
  }
}
