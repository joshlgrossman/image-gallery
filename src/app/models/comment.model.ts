export class CommentModel {

  public readonly user:string;
  public readonly date:Date;
  public readonly content:string;

  public constructor(params:{user:string, date:Date, content:string}){
    this.user = params.user;
    this.date = params.date;
    this.content = params.content;
  }

}