import {Image} from "./image";

export class ImagesResponse {
  constructor(
    public pi_camera_images : Image[],
    public lepton_images:Image[],
    public mlx_images:Image[]
  ) { }
}
