import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {NgForOf, TitleCasePipe} from "@angular/common";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {
  IgxButtonModule,
  IgxCardModule,
  IgxCarouselComponent,
  IgxCarouselModule
} from "igniteui-angular";

@Component({
  selector: 'app-view-images',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    IgxCarouselModule,
    IgxButtonModule,
    IgxCardModule,
    NgForOf,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatButton,
    TitleCasePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './view-images.component.html',
  styleUrl: './view-images.component.css'
})
export class ViewImagesComponent implements OnInit{
  @ViewChild('carousel', { static: true }) public carousel!: IgxCarouselComponent;

  selectedYear!: number;
  years: number[] = [2024]
  selectedCamera!: number;
  cameras: number[] = [1,2,3,4,5,6,7,8];
  selectedSite!: string;
  sites: string [] = ["Othello"];
  selectedDate!: Date;
  minDate!: Date;
  maxDate!: Date;
  public slides: any[] = [];
  public animations = ['slide', 'fade', 'none'];

  ngOnInit(): void {
    this.selectedYear = this.years[0];
    this.selectedCamera = this.cameras[0];
    this.selectedSite = this.sites[0];

    if (this.selectedYear == 2024) {
      this.minDate = new Date(this.selectedYear, 3,27);
      this.maxDate = new Date(this.selectedYear, 6,15);
    }
    this.addSlides();
  }


  searchImages() {

  }

  public addSlides() {
    this.slides.push(
      {
        heading: 'Ignite UI for Angular',
        image: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide1-angular.png',
        ndvi: ''
      },
      {
        heading: 'Ignite UI for Javascript',
        image: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide2-ignite.png',
        ndvi: ''
      },
      {
        heading: 'Ultimate UI for ASP.NET',
        image: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide3-aspnet.png',
        ndvi: ''
      }
    );
  }
}
