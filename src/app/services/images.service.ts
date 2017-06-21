import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image.model';

@Injectable()
export class ImagesService {

  public images:ImageModel[];

  constructor(){
    this.images = [];
  }

  public getImages() : Promise<ImageModel[]> {

    // Fake webservice cache
    if(this.images.length) return Promise.resolve(this.images);
    // Fake webservice request
    return new Promise((resolve, reject) => {
      const imagesJSON:any[] = require('./images.json');

      for(const imageJSON of imagesJSON) {
        this.images.push(new ImageModel(imageJSON));
      }

      resolve(this.images);
    });

  }


}