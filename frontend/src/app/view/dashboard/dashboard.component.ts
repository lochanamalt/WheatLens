import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartsService} from "../../services/charts.service";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexLegend, ApexMarkers, ApexStroke, ApexTheme, ApexTitleSubtitle,
  ApexXAxis, ApexYAxis,
  ChartComponent
} from "ng-apexcharts";
import {CommonModule} from "@angular/common";
import {ViType} from "../../data/vi-type";

export type ChartOptions = {
  chart: ApexChart;
  xaxis: ApexXAxis;
  legend: ApexLegend;
  stroke: ApexStroke;
  markers: ApexMarkers;
  theme:ApexTheme
};

export type ChartData = {
  series: ApexAxisChartSeries,
  title: ApexTitleSubtitle,
  yaxis: ApexYAxis,
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {
    chart: {
      height: 450,
      type: "line",
      animations: { enabled: true },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      width: 2,
    },
    theme: {
      mode: "dark"
    },
    markers: {
      size: 2,               // Sets the point radius to 4
      strokeColors: "#fff",  // Border color of the point
      strokeWidth: 0.5,        // Border width of the point
      hover: {
        size: 6              // Expands the point slightly when a user hovers over it
      }
    },
    xaxis: {
      type: "datetime",
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      onItemClick: {
        toggleDataSeries: true,

      }
    }
  };

  public ndviData!: Partial<ChartData>;
  public gndviData!: Partial<ChartData>;
  public eviData!: Partial<ChartData>;
  public rdviData!: Partial<ChartData>;
  public saviData!: Partial<ChartData>;
  public srData!: Partial<ChartData>;
  public cigreenData!: Partial<ChartData>;
  public gliData!: Partial<ChartData>;
  public variData!: Partial<ChartData>;
  public canopyTempData!: Partial<ChartData>;

  constructor(private chartService: ChartsService) { }

  getTimeSeriesData() {
    this.chartService.getInfluxDBVIData(ViType.NDVI)
        .subscribe(response => {
          this.ndviData = {
            series: response.series,
            title: {
              text: "Normalized Difference Vegetation Index (NDVI)",
              align: "left",
              style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
            }
          }
        });
    this.chartService.getInfluxDBVIData(ViType.GNDVI)
      .subscribe(response => {
        this.gndviData = {
          series: response.series,
          title: {
            text: "Green Normalized Difference Vegetation Index (GNDVI)",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          }
        }
      });
    this.chartService.getInfluxDBVIData(ViType.RDVI)
      .subscribe(response => {
        this.rdviData = {
          series: response.series,
          title: {
            text: " Renormalized Difference Vegetation Index (RDVI) ",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          }
        }
      });
    this.chartService.getInfluxDBVIData(ViType.EVI)
      .subscribe(response => {
        this.eviData = {
          series: response.series,
          title: {
            text: "Enhanced Vegetation Index (EVI)",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          }
        }
      });
    this.chartService.getInfluxDBVIData(ViType.SAVI)
      .subscribe(response => {
        this.saviData = {
          series: response.series,
          title: {
            text: "Soil-Adjusted Vegetation Index (SAVI)",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          }
        }
      });
    this.chartService.getInfluxDBVIData(ViType.SR)
      .subscribe(response => {
        this.srData = {
          series: response.series,
          title: {
            text: "Simple Ratio (SR)",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          }
        }
      });
    this.chartService.getInfluxDBVIData(ViType.CI_GREEN)
      .subscribe(response => {
        this.cigreenData = {
          series: response.series,
          title: {
            text: "Chlorophyll Index - Green (CI-Green)",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          }
        }
      });
    this.chartService.getInfluxDBVIData(ViType.GLI)
      .subscribe(response => {
        this.gliData = {
          series: response.series,
          title: {
            text: "Green Leaf Index (GLI)",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          }
        }
      });
    this.chartService.getInfluxDBVIData(ViType.VARI)
      .subscribe(response => {
        this.variData = {
          series: response.series,
          title: {
            text: "Visible Atmospherically Resistant Index (VARI)",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          }
        }
      });
    this.chartService.getInfluxDBTemperatureData()
      .subscribe(response => {
        this.canopyTempData = {
          series: response.series,
          title: {
            text: "Canopy Temperature",
            align: "left",
            style: {color: "#ffffff", fontSize:"18px", fontWeight: "normal"}
          },
          yaxis: {
            labels: {
              formatter: (value: number) => {
                if (value === null || value === undefined) return '';
                return `${Math.round(value)}°C`;
              }
            },
            tickAmount: 5
          },
        }
      });
    }

  ngOnInit(): void {
    this.getTimeSeriesData();
  }

}
