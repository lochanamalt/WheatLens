import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectChange, MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MatCalendar, MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {
  IgxButtonModule,
  IgxCardModule,
  IgxCarouselComponent,
  IgxCarouselModule
} from "igniteui-angular";
import {LoaderComponent} from "../../shared/loader/loader.component";
import {NoDataComponent} from "../../shared/no-data/no-data.component";
import {ImagesService} from "../../images.service";
import {Image} from "../../data/image";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MapComponent} from "../map/map.component";
import {MatCard} from "@angular/material/card";
import {SiteData} from "../../data/site-data";

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
    MatButton,
    LoaderComponent,
    NgIf,
    NoDataComponent,
    ReactiveFormsModule,
    MapComponent,
    MatCard,
    MatCalendar,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './view-images.component.html',
  styleUrl: './view-images.component.css'
})
export class ViewImagesComponent implements OnInit{
  @ViewChild('carousel', { static: true }) public carousel!: IgxCarouselComponent;

  selectedYear!: number;
  years: number[] = [2024, 2025]
  selectedCamera!: number;
  cameras: number[] = [];
  selectedSite!: string;
  sites: string [] = [];
  selectedDate!: Date;
  minDate!: Date;
  maxDate!: Date;
  public pi_camera_images: Image[] = [];
  public lepton_camera_images: Image[] = [];
  public mlx_sensor_images: Image[] = [];
  public animations = ['slide', 'fade', 'none'];
  selectedDateMissing = false;
  loading: boolean = false;
  searched: boolean = false;
  cameraSelected: boolean = false;
  showMap!: boolean;


  constructor(private imageService: ImagesService,private cdRef: ChangeDetectorRef,private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.showMap = true;
    this.selectedYear = this.years[this.years.length - 1];
    this.yearChanged()
  }



  searchImages() {

    if (!this.selectedDate) {
      this._snackBar.open("Date is required", "Ok");
    }
    else {
      this.searched = true;
      this.loading = true;
      this.imageService.getImages(this.selectedSite,this.selectedDate, this.selectedCamera)
        .subscribe(data => {
          this.pi_camera_images = data.pi_camera_images;
          this.lepton_camera_images = data.lepton_images;
          this.mlx_sensor_images = data.mlx_images;
          this.loading = false;
          this.cdRef.detectChanges();

        });
    }


  }

  public addSlides() {
    this.pi_camera_images.push(
      {
        timestamp: 'Ignite UI for Angular',
        image_file: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide1-angular.png',
      },
      {
        timestamp: 'Ignite UI for Javascript',
        image_file: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide2-ignite.png',
      },
      {
        timestamp: 'Ultimate UI for ASP.NET',
        image_file: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide3-aspnet.png',
      }
    );
  }

  onYearChange() {
    this.yearChanged()
  }



  yearChanged(){

    this.sites = [...SiteData.sitesByYear[this.selectedYear].sites];
    this.cameras = [...SiteData.sitesByYear[this.selectedYear].cameras];
    this.selectedCamera = this.cameras[0];
    this.selectedSite = this.sites[0];

    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    this.minDate = SiteData.sitesByYear[this.selectedYear].season_start
    this.maxDate = SiteData.sitesByYear[this.selectedYear].season_end

    if (currentDate > this.maxDate) {
      this.selectedDate = new Date(this.maxDate);
    }
    else {
      this.selectedDate = currentDate;
      this.maxDate = currentDate;
    }


    if (this.selectedYear == 2024) {
      this.cameraSelected = true;
      this.showMap = false;
      this.searchImages();
    }
    else {
      this.showMap = true;
      this.cameraSelected = false;
    }

  }


  protected readonly SiteData = SiteData;


  onDateChange() {
    this.searchImages()
  }

  handleMarkerSelection(markerId: number) {
    this.selectedCamera = this.cameras[markerId-1];
    this.cameraSelected = true;
    this.showMap = false;
    this.searchImages();
  }

  goBackToMapView() {
    this.showMap = true;
    this.cameraSelected = false;
  }
}
