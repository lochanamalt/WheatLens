import { Routes } from '@angular/router';
import {ViewImagesComponent} from "./view/view-images/view-images.component";
import {VegetationIndicesComponent} from "./view/vegetation-indices/vegetation-indices.component";

export const routes: Routes = [
  { path: '', component: ViewImagesComponent },
  { path: 'view-images', component: ViewImagesComponent },
  { path: 'vegetation-indices', component: VegetationIndicesComponent },
];
