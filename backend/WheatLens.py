import base64
import os
from datetime import datetime

from azure.storage.fileshare import ShareServiceClient, FileProperties
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from iniparse import ConfigParser


def get_connection_string():
    """Reads the Azure connection string from the config.properties file."""
    config = ConfigParser()
    config.read('config.properties')
    if config.get('DEFAULT', 'env') == 'prod':
        return os.environ.get('CONNECTION_STRING')
    else:
        return config.get('DEFAULT', 'azure.connectionstring')


# Azure file share information
connection_string = get_connection_string()
share_name = "othello-data"
main_folder = "upload"

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
    # camera_number = int(request.form["camera_number"])
    # selected_date = datetime.strptime(request.form["selected_date"], "%Y-%m-%d")

    try:

        # Build the image path based on camera number and date
        directory_name_pi_camera = f"{main_folder}/pi{camera_number}/pi_camera/"
        directory_name_lepton = f"{main_folder}/pi{camera_number}/lepton/"
        directory_name_mlx = f"{main_folder}/pi{camera_number}/mlx/"

        directory_client_pi_camera = share_client.get_directory_client(directory_name_pi_camera)
        directory_client_lepton = share_client.get_directory_client(directory_name_lepton)
        directory_client_mlx = share_client.get_directory_client(directory_name_mlx)

        prefix1 = f"date_{selected_date.strftime('%#d-%#m-%Y')}"
        prefix2 = f"pic_{selected_date.strftime('%Y-%m-%d')}"

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


if __name__ == "__main__":
    app.run(debug=True)
