import {ChangeDetectorRef, Component} from '@angular/core';
import {PiCamSelectorComponent} from "../../shared/pi-cam-selector/pi-cam-selector.component";
import {
  IgxCardComponent,
  IgxCardHeaderComponent,
  IgxCardHeaderTitleDirective,
  IgxCardMediaDirective, IgxCarouselComponent, IgxCarouselIndicatorDirective, IgxSlideComponent
} from "igniteui-angular";
import {LoaderComponent} from "../../shared/loader/loader.component";
import {MatCalendar} from "@angular/material/datepicker";
import {MatCard} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {NoDataComponent} from "../../shared/no-data/no-data.component";
import {Image} from "../../data/image";
import {ImagesService} from "../../images.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-vegetation-indices',
  standalone: true,
  imports: [
    PiCamSelectorComponent,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective,
    IgxCarouselComponent,
    IgxCarouselIndicatorDirective,
    IgxSlideComponent,
    LoaderComponent,
    MatCalendar,
    MatCard,
    NgForOf,
    NgIf,
    NoDataComponent
  ],
  templateUrl: './vegetation-indices.component.html',
  styleUrl: './vegetation-indices.component.css'
})
export class VegetationIndicesComponent {

  cameraSelected: boolean = false;
  searched: boolean = false;
  loading: boolean = false;
  selectedDate!: Date;
  minDate!: Date;
  maxDate!: Date;
  selectedSite!: string;
  selectedCamera!: number;

  public ndvi_images: Image[] = [];

  constructor(private imageService: ImagesService,private cdRef: ChangeDetectorRef,private _snackBar: MatSnackBar) {
  }


  searchVIImages() {
    if (!this.selectedDate) {
      this._snackBar.open("Date is required", "Ok");
    }
    else {
      this.searched = true;
      this.loading = true;
      this.imageService.getVIImages(this.selectedSite,this.selectedDate, this.selectedCamera)
        .subscribe(data => {
          this.ndvi_images = data.ndvi_images;
          this.loading = false;
          this.cdRef.detectChanges();

        });
    }
  }


  handleBeginSelection(data: { selectedSite: string, selectedCamera: number, selectedDate: Date }) {
    this.selectedSite = data.selectedSite;
    this.selectedCamera = data.selectedCamera;
    this.selectedDate = data.selectedDate;
    this.cameraSelected = true;
    this.searchVIImages();
  }

  handleDateUpdate(data: { minDate: Date; maxDate: Date; selectedDate: Date }) {
    this.minDate = data.minDate;
    this.maxDate = data.maxDate;
    this.selectedDate = data.selectedDate;
  }

  onDateChange() {
    this.searchVIImages()
  }
}
