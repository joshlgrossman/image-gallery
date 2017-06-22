/**
 * @class CommentModel
 * Model for representing a comment within an image's comment thread
 */
export class CommentModel {

  public readonly user:string;
  public readonly date:Date;
  public readonly content:string;

  public constructor(params?:{user:string, date:Date, content:string}){
    if(params){
      this.user = params.user;
      this.date = params.date;
      this.content = params.content;
    } else {
      this.user = '';
      this.date = new Date();
      this.content = '';
    }
  }

  /** creates a shallow copy of this comment */
  public clone() : CommentModel {
    return new CommentModel(this);
  }

}