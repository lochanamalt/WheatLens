import base64
import io
import os
from datetime import datetime

import numpy as np
import rasterio
from PIL import Image
from azure.storage.fileshare import ShareServiceClient, FileProperties
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from iniparse import ConfigParser

import matplotlib
matplotlib.use("Agg")

from matplotlib import pyplot as plt
from matplotlib.cm import ScalarMappable
from matplotlib.colors import Normalize


def get_connection_string():
    """Reads the Azure connection string from the config.properties file."""
    config = ConfigParser()
    config.read('config.properties')
    if config.get('DEFAULT', 'env') == 'prod':
        return 'prod', os.environ.get('CONNECTION_STRING')
    else:
        return 'dev', config.get('DEFAULT', 'azure.connectionstring')


# Azure file share information
env, connection_string = get_connection_string()
share_name = "othello-data"

app = Flask(__name__, static_folder='static', static_url_path='')
# app = Flask(__name__)
CORS(app)

# Create a ShareServiceClient from the connection string
service_client = ShareServiceClient.from_connection_string(conn_str=connection_string)

# Get a reference to the file share
share_client = service_client.get_share_client(share_name)


@app.route('/')
def index():
    return send_from_directory('static', 'index.html')


@app.route("/api/images", methods=["GET"])
# @app.route("/images", methods=["POST"])
def get_images():
    print("Getting images")
    camera_number = int(request.args.get('camera'))
    selected_date = datetime.strptime(request.args.get('date'), "%Y-%m-%d")
    selected_year = selected_date.year
    print("Client selected date: ", selected_date)
    # camera_number = int(request.form["camera_number"])
    # selected_date = datetime.strptime(request.form["selected_date"], "%Y-%m-%d")

    try:

        # Build the image path based on camera number and date
        directory_name_pi_camera = f"{selected_year}/upload/pi{camera_number}/pi_camera/"
        directory_name_lepton = f"{selected_year}/upload/pi{camera_number}/lepton/"
        directory_name_mlx = f"{selected_year}/upload/pi{camera_number}/mlx/"

        directory_client_pi_camera = share_client.get_directory_client(directory_name_pi_camera)
        directory_client_lepton = share_client.get_directory_client(directory_name_lepton)
        directory_client_mlx = share_client.get_directory_client(directory_name_mlx)

        if env == 'prod':
            prefix1 = f"date_{selected_date.strftime('%-d-%-m-%Y')}"
        else:
            prefix1 = f"date_{selected_date.strftime('%#d-%#m-%Y')}"
        prefix2 = f"pic_{selected_date.strftime('%Y-%m-%d')}"
        print("Search prefix1: ", prefix1)
        print("Search prefix2: ", prefix2)

        image_names_pi_camera = [
            item.name for item in directory_client_pi_camera.list_directories_and_files()
            if item.name.startswith(prefix1) and isinstance(item, FileProperties)
        ]
        image_names_lepton = [
            item.name for item in directory_client_lepton.list_directories_and_files()
            if item.name.startswith(prefix1) and isinstance(item, FileProperties)
        ]
        image_names_mlx = [
            item.name for item in directory_client_mlx.list_directories_and_files()
            if item.name.startswith(prefix2) and isinstance(item, FileProperties)
        ]

        print("Pi camera no.  of image names: ", len(image_names_pi_camera))
        print("Lepton no. of image names: ", len(image_names_lepton))
        print("MLX no. of image names: ", len(image_names_mlx))

        # Download streams for all images
        images_pi_camera = []
        images_lepton = []
        images_mlx = []

        date_string = selected_date.strftime('%Y-%b-%d')

        for image_name in image_names_pi_camera:
            file_client = share_client.get_file_client(directory_name_pi_camera + image_name)
            time_string = image_name.split(prefix1 + "_")[1].split("_1.png")[0].replace(".", ":")
            images_pi_camera.append({'timestamp': date_string + ' ' + time_string,
                                     'image_file': base64.b64encode(file_client.download_file().readall()).decode(
                                         "utf-8")})

        for image_name in image_names_lepton:
            file_client = share_client.get_file_client(directory_name_lepton + image_name)
            time_string = image_name.split(prefix1 + "_")[1].split("_1.png")[0].replace(".", ":")
            images_lepton.append({'timestamp': date_string + ' ' + time_string,
                                  'image_file': base64.b64encode(file_client.download_file().readall()).decode(
                                      "utf-8")})

        for image_name in image_names_mlx:
            file_client = share_client.get_file_client(directory_name_mlx + image_name)
            time_string = image_name.split(prefix2 + "_")[1].split(".jpg")[0].replace("-", ":")
            images_mlx.append({'timestamp': date_string + ' ' + time_string,
                               'image_file': base64.b64encode(file_client.download_file().readall()).decode(
                                   "utf-8")})

        print("Pi camera no. of images: ", len(images_pi_camera))
        print("Lepton no. of images: ", len(images_lepton))
        print("MLX no. of images: ", len(images_mlx))


        # Download the image to a temporary location (optional)
        # This can be helpful for caching or manipulating the image before serving
        # with open("tmp.jpg", "wb") as download_file:
        #     data = file_client.download_file()
        #     data.readinto(download_file)

        # # Get a content stream for the image
        # download_stream = file_client.download_file().readall()
        # # Create an in-memory file-like object
        # in_memory_file = BytesIO(download_stream)
        # # Set the file pointer to the beginning
        # in_memory_file.seek(0)
        # # Return the image content as a response
        # return send_file(in_memory_file, mimetype="image/jpeg", as_attachment=False)

        return jsonify(pi_camera_images=images_pi_camera, lepton_images=images_lepton, mlx_images=images_mlx)

    except Exception as e:
        print(e)
        return f"Error: {str(e)}", 500

@app.route("/api/vi-images", methods=["GET"])
# @app.route("/images", methods=["POST"])
def get_vi_images():
    print("Getting VI images")
    camera_number = int(request.args.get('camera'))
    selected_date = datetime.strptime(request.args.get('date'), "%Y-%m-%d")
    selected_year = selected_date.year
    print("Client selected date: ", selected_date)
    # camera_number = int(request.form["camera_number"])
    # selected_date = datetime.strptime(request.form["selected_date"], "%Y-%m-%d")

    try:

        # Build the image path based on camera number and date
        directory_name_ndvi = f"{selected_year}/output/vi/pi{camera_number}/cam{camera_number}_ndvi_noir_rgb_channel_method/"
        directory_name_mask = f"{selected_year}/output/canopy_masks/pi{camera_number}/"

        directory_client_ndvi = share_client.get_directory_client(directory_name_ndvi)
        directory_client_mask = share_client.get_directory_client(directory_name_mask)

        if env == 'prod':
            prefix1 = f"date_{selected_date.strftime('%-d-%-m-%Y')}"
            mask_prefix = f"modified_seg_mask_date_{selected_date.strftime('%-d-%-m-%Y')}"
        else:
            prefix1 = f"date_{selected_date.strftime('%#d-%#m-%Y')}"
            mask_prefix = f"modified_seg_mask_date_{selected_date.strftime('%#d-%#m-%Y')}"

        print("Search prefix1: ", prefix1)

        image_names_ndvi = [
            item.name for item in directory_client_ndvi.list_directories_and_files()
            if item.name.startswith(prefix1) and isinstance(item, FileProperties)
        ]

        mask_names = [
            item.name for item in directory_client_mask.list_directories_and_files()
            if item.name.startswith(mask_prefix) and isinstance(item, FileProperties)
        ]


        print("NDVI no.  of image names: ", len(image_names_ndvi))
        # Download streams for all images
        images_vi = []

        date_string = selected_date.strftime('%Y-%b-%d')

        for image_name in image_names_ndvi:
            mask_name = f"modified_seg_mask_{image_name.split('.tif')[0]}"
            if mask_name in mask_names:
                vi_file_client = share_client.get_file_client(directory_name_ndvi + image_name)
                mask_file_client = share_client.get_file_client(directory_name_mask + mask_name)

                vi_stream = io.BytesIO()
                vi_data = vi_file_client.download_file().readall()
                vi_stream.write(vi_data)
                vi_stream.seek(0)

                mask_stream = io.BytesIO()
                mask_data = mask_file_client.download_file().readall()
                mask_stream.write(mask_data)
                mask_stream.seek(0)

                buffer = process_ndvi_tiff(vi_stream, mask_stream)

                time_string = image_name.split(prefix1 + "_")[1].split("_1.png")[0].replace(".", ":")
                images_vi.append({'timestamp': date_string + ' ' + time_string,
                                         'image_file': base64.b64encode(buffer.read()).decode(
                                             "utf-8")})

        print("NDVI no. of images: ", len(images_vi))

        return jsonify(ndvi_images=images_vi)

    except Exception as e:
        print(e)
        return f"Error: {str(e)}", 500


def process_ndvi_tiff(vi_stream, mask_stream):
    # load TIFF from memory
    with rasterio.open(vi_stream) as src:
        ndvi = src.read(1).astype("float32")

    h, w = ndvi.shape

    mask_img = Image.open(mask_stream).convert("L")
    mask = (np.array(mask_img) > 0).astype(np.uint8)

    # apply colormap
    cmap = plt.cm.RdYlGn
    norm = Normalize(vmin=-1, vmax=1)
    ndvi_colored = cmap(norm(ndvi))

    alpha_background = 0.2
    alpha_canopy = 1.0
    alpha_mask = np.where(mask == 1, alpha_canopy, alpha_background)

    final_image = ndvi_colored.copy()
    final_image[..., :3] *= alpha_mask[..., None]
    final_image[..., 3] = 1.0

    fig, ax = plt.subplots(figsize=(8, 6))
    ax.imshow(final_image)
    ax.axis("off")

    sm = ScalarMappable(norm=norm, cmap=cmap)
    sm.set_array([])
    cbar = plt.colorbar(sm, ax=ax, fraction=0.046, pad=0.04)
    cbar.set_label("NDVI")

    plt.tight_layout()

    # Save figure to memory buffer
    buf = io.BytesIO()
    fig.savefig(buf, dpi=300, format="png", bbox_inches="tight")
    plt.close(fig)
    buf.seek(0)
    return buf


if __name__ == "__main__":
    app.run(debug=True)
