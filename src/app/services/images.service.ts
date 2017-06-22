import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image.model';

@Injectable()
export class ImagesService {

  private images:Map<string, ImageModel>;

  public getImages() : Promise<Map<string, ImageModel>> {

    // Fake webservice cache
    if(this.images) return Promise.resolve(this.images);
    // Fake webservice request
    return new Promise((resolve, reject) => {

      const imagesJSON:any = require('./images.json');
      this.images = new Map<string, ImageModel>();
      
      for(const imageJSON of imagesJSON) {
        this.images.set(imageJSON.id, new ImageModel(imageJSON));
      }

      resolve(this.images);

    });

  }

  public async getImage(imageId:string) : Promise<ImageModel> {
    return (await this.getImages()).get(imageId);
  }

}