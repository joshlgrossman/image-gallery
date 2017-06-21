export class ImageModel {

  public readonly title:string;
  public readonly caption:string;
  public readonly url: string;

  constructor(params:{title:string, caption:string, url: string}){
    this.title = params.title;
    this.caption = params.caption;
    this.url = params.url;
  }

}