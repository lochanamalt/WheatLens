"""
@author: Lochana Marasinghe
@date: 6/15/2026
@description: 
"""
from enum import Enum


class VI(Enum):
    NDVI = "ndvi"
    GNDVI = "gndvi"
    CI_GREEN = "ci_green"
    EVI = "evi"
    GLI = "gli"
    RDVI = "rdvi"
    SAVI = "savi"
    SR = "sr"
    VARI = "vari"

def get_influxdb_field(vi: VI):
    match vi:
            case VI.NDVI:
                return "ndvi_noir_rgb_method"
            case VI.GNDVI:
                return "gndvi_noir_rgb_method"
            case VI.EVI:
                return "evi_noir_rgb_method"
            case VI.CI_GREEN:
                return "cigreen_noir_rgb_method"
            case VI.RDVI:
                return "rdvi_noir_rgb_method"
            case VI.SAVI:
                return "savi_noir_rgb_method"
            case VI.SR:
                return "sr_noir_rgb_method"
            case VI.GLI:
                return "gli"
            case VI.VARI:
                return "vari"