import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})

export class PhoneCamera {
  image: string;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) { }

  async takePicture(): Promise<any> {
    try {
      this.image = await this.camera.getPicture(this.options);
    } catch (e) {
      console.log(e);
    }
  }
}