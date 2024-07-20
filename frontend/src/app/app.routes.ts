import { Routes } from '@angular/router';
import {ViewImagesComponent} from "./view/view-images/view-images.component";

export const routes: Routes = [
  { path: '', component: ViewImagesComponent },
  { path: 'view-images', component: ViewImagesComponent }
];
