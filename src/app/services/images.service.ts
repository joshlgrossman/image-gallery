import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image.model';

/**
 * @class ImagesService
 * Service for getting images.
 * In reality, the methods in this class would make an AJAX request
 * to get data.  In lieu of this, I'm returning promises from
 * these methods to simulate the Observable async behavior of HTTP requests
 */
@Injectable()
export class ImagesService {

  /** cached images */
  private images:Map<string, ImageModel>;

  /*
    Normally, we would have a constructor here injected with
    Http which we would then use later to make requests.  Instead of
    returning manually created Promises, we would return the result
    of an Http#get or Http#post call (which are Observables)
  */

  /**
   * Gets all images
   * @returns a promise of a map (imageId -> ImageModel)
   */
  public getImages() : Promise<Map<string, ImageModel>> {

    // Fake webservice cache
    if(this.images) return Promise.resolve(this.images);
    // Fake webservice request, in reality a HTTP request would be made here
    return new Promise((resolve, reject) => {

      const imagesJSON:any = require('./images.json');
      this.images = new Map<string, ImageModel>();
      
      for(const imageJSON of imagesJSON) {
        this.images.set(imageJSON.id, new ImageModel(imageJSON));
      }

      resolve(this.images);

    });

  }

  /**
   * Get the image with a specific id
   * @param imageId the id of the image to get
   * @returns a promise of an ImageModel
   */
  public async getImage(imageId:string) : Promise<ImageModel> {
    return (await this.getImages()).get(imageId);
  }

}