import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
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
import {ImagesResponse} from "../../data/images-response";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    LoaderComponent,
    NgIf,
    NoDataComponent,
    ReactiveFormsModule,
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
  public pi_camera_images: Image[] = [];
  public lepton_camera_images: Image[] = [];
  public mlx_sensor_images: Image[] = [];
  public animations = ['slide', 'fade', 'none'];
  selectedDateMissing = false;
  loading: boolean = false;
  searched: boolean = false;


  constructor(private imageService: ImagesService,private cdRef: ChangeDetectorRef,private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.selectedYear = this.years[0];
    this.selectedCamera = this.cameras[0];
    this.selectedSite = this.sites[0];

    if (this.selectedYear == 2024) {
      this.minDate = new Date(this.selectedYear, 3,27);
      this.maxDate = new Date(this.selectedYear, 6,15);
    }
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
}
