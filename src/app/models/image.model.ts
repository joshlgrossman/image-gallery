/**
 * @class ImageModel
 * Model for representing Images
 */
export class ImageModel {

  public readonly id:string;
  public readonly title:string;
  public readonly caption:string;
  public readonly url: string;
  
  public constructor(params:{id:string, title:string, caption:string, url:string}){
    this.id = params.id;
    this.title = params.title;
    this.caption = params.caption;
    this.url = params.url;
  }

}