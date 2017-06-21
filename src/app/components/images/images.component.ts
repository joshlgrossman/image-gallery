import { Component } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'images',
  template: require('./images.template.html'),
  providers: [ImagesService]
})
export class ImagesComponent {

  private images:ImageModel[];

  constructor(imagesService:ImagesService) {
    this.loadImages(imagesService);
  }

  async loadImages(imagesService:ImagesService){
    try {
      this.images = await imagesService.getImages();
    } catch (e) {
      console.log(e);
    }
  }

}