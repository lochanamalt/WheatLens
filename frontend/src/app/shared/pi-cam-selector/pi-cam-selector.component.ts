import {Component, EventEmitter, Input, model, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {SiteData} from "../../data/site-data";

@Component({
  selector: 'app-pi-cam-selector',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatFormField,
        MatInput,
        MatLabel,
        MatOption,
        MatSelect,
        MatSuffix,
        NgForOf,
        NgIf
    ],
  templateUrl: './pi-cam-selector.component.html',
  styleUrl: './pi-cam-selector.component.css'
})
export class PiCamSelectorComponent implements OnInit, OnChanges{

  @Output() beginSearch = new EventEmitter<{ selectedSite: string; selectedCamera: number; selectedDate:Date }>();
  @Output() updateDate = new EventEmitter<{ minDate: Date; maxDate: Date; selectedDate:Date }>();
  @Input() parentDate!: Date;

  selectedYear!: number;
  years: number[] = [2024, 2025]
  selectedCamera!: number;
  cameras: number[] = [];
  selectedSite!: string;
  sites: string [] = [];
  selectedDate!: Date;
  minDate!: Date;
  maxDate!: Date;

  cameraSelected: boolean = false;
  showMap!: boolean;

  ngOnInit(): void {
    this.showMap = true;
    this.selectedYear = this.years[0];
    // this.selectedYear = this.years[this.years.length - 1];
    this.yearChanged()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentDate'] && changes['parentDate'] !== undefined) {
      const currentDate = changes['parentDate'].currentValue;
      if (currentDate != this.selectedDate) {
        this.selectedDate = currentDate;
      }
    }
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
    this.emitDateChange()

    if (this.selectedYear == 2024) {
      this.cameraSelected = true;
      this.showMap = false;
      this.emitSignalToSearch();
    }
    else {
      this.showMap = true;
      this.cameraSelected = false;
    }

  }

  onDateChange() {
    this.emitSignalToSearch()
  }

  emitSignalToSearch() {
    this.showMap = false;
    this.beginSearch.emit({selectedSite: this.selectedSite,
      selectedCamera: this.selectedCamera, selectedDate: this.selectedDate});

  }

  emitDateChange() {
    this.updateDate.emit({minDate: this.minDate, maxDate: this.maxDate, selectedDate: this.selectedDate});
  }

  goBackToMapView() {
    this.showMap = true;
    this.cameraSelected = false;
  }

  cameraChanged() {
    this.emitSignalToSearch();
  }
}
