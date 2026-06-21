# WheatLens: Real Time Crop Monitoring Dashboard for Wheat

[![License](https://img.shields.io/badge/License-CC_BY--NC_4.0-blue.svg)](https://creativecommons.org/licenses/by-nc/4.0/legalcode)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen.svg)
[![Python](https://img.shields.io/badge/Backend-Python_3.12+-navy.svg)](https://python.org)
[![Platform](https://img.shields.io/badge/Frontend-Angular_CLI_20.3.25-red.svg)](https://github.com/angular/angular-cli)
![Research](https://img.shields.io/badge/Research-WSU--Phenomics-yellow.svg)

WheatLens is an web application designed to track and visualize crop development
over time.

Visit WheatLens here: [wheat-lens.azurewebsites.net](https://wheat-lens.azurewebsites.net/)

The platform integrates data from field imaging sensors—specifically Raspberry Pi RGB and NoIR camera and 
thermal camera data to monitor plot-level canopy temperature dynamics, and Vegetation Indices (VIs).

---

## Key System Features

* **Multi-Line Interactive VI Graphs:** Time-series line charts tracking canopy temperature and VIs.
Interactive legend isolates a specific plot's lifecycle with a single click.
* **Raw Sensor Data:** Organizes and catalogs daily image collections sourced from 
**Raspberry Pi Camera V2 (IMX219)** RGB and NoIR camera modules, **FLIR Lepton** thermal camera and **Melexis MLX90640** thermal camera.
* **Canopy segmented NDVI:** Utilizes semantic segmentation pipelines to isolate the crop canopy from background soil noise.
NDVI is then mapped by calculating the spectral reflectance data extracted from the camera sensors.

---

## System Architecture & Data Flow

The platform separates data ingestion, backend querying, and client-side visualization layers to optimize performance when handling dense historical seasonal datasets:

```
[ InfluxDB Cloud (Azure) ]              [ Azure Storage File Share ]
         │                                            │
         │ (Secure Flux Queries)                      │ (SMB / REST API File Ingestion)
         │ - Daily time series VI data                │ - Raw Pi Camera RGB & NoIR Images
         │ - Daily time series canopy temperature     │ - Processed Canopy-Segmented NDVI
         │                                            │ 
         ▼                                            ▼
[ Python Backend ] ───────────────────────────────────────────────┐
         │                                                        │
         │ (Parses InfluxDB timeseries data, streams images       │
         ▼                                    from File Share)    │
[ Angular Web Client ] <──────────────────────────────────────────┘
  ├── Custom Graphs (ApexCharts for VIs & Canopy Temp)
  ├── Daily Raw Imagery (RGB, NoIR, Thermal)
  └── Masked NDVI Imagery 

```

---

## Repository File Structure

```text
│                         # Source code deployed in Azure Web App
├── app.py                # Python backend application API entry point (Flask framework)
├── config.properties     # Environment configuration
├── requirements.txt      # Python package dependencies
├── vegetation_indices.py # Vegetation Indices enum and field names for InfluxDB
├── static/               # Compiled Angular frontend distribution files
│
├── frontend/                 # Angular Web Client Application Core
│   ├── public/               # Images,icons and logos
│   ├── src/
│   │   ├── app/
│   │   │   ├── data/         # DTO objects
│   │   │   ├── services/     # Data services handling HTTP calls to the backend
│   │   │   ├── shared/       # Common UI components
│   │   │   └── view/         # UI Layouts for the pages (Dashboard, View Raw Images, NDVI Images)
│   │   └── environments/     # Multi-stage configuration (Local Dev vs. Azure Production)
│   ├── angular.json          # Production build-target & file-replacement rules
│   └── package.json          # Angular dependencies and compilation scripts
│
├── LICENSE 
└── README.md                 # Project Documentation

```

---

## Configuration & Installation

### Azure Web App Deployment

Change the `env` variable in the config.properties to `prod`.

Setup the following environment variables in your Azure Web app
```env
CONNECTION_STRING
INFLUX_URL
INFLUX_TOKEN
INFLUX_ORG
INFLUX_BUCKET
```

Go to the Deployment Center in Azure Web App and Connect to the GitHub Repository to Deploy. Pick the latest release branch for the deployment.

---
### 1. Python Backend Server Run Locally

Install the application's runtime dependencies:

```bash
pip install -r requirements.txt
```

The backend requires access to the cloud InfluxDB bucket instance and the Azure File Share
To run locally, find the config.properties file and include the configurations:

```env
env=dev
azure.connectionstring=<connection_string>
influxdb.url=<influxdb_url>
influxdb.org=<influxdb_organization_id>
influxdb.bucket=<influxdb_bucketname>
influxdb.token=<influxdb_token>
```
and boot up your local api development server


### 2. Angular Frontend Run Locally

Navigate to the frontend workspace container and install dependencies:

```bash
npm install
```

To boot up the application locally in standard development mode:

```bash
ng serve
```

Run below to compile production-ready static assets and copy the assists to  `/static` directory.

```bash
ng build --configuration production
```

---

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0). 

**Commercial sale, paid distribution, or monetization of this software is strictly prohibited.** It is freely available for educational, personal, and academic research purposes. See the [LICENSE](LICENSE) file for details.
