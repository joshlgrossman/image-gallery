export class ImagesService {

  public images:Object[];

  constructor(){

  }

  public getImages() : Promise<Object[]> {

    if(this.images) return Promise.resolve(this.images);
    // Fake webservice request
    return new Promise((resolve, reject) => {
      this.images = require('./images.json');
      resolve(this.images);
    });

  }


}