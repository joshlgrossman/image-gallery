import { Injectable } from '@angular/core';
import { CommentModel } from '../models/comment.model';

@Injectable()
export class CommentsService {

  private comments:Map<string, CommentModel[]>;

  public constructor(){ 
    this.comments = new Map<string, CommentModel[]>();
  }

  public async getComments(imageId:string) : Promise<CommentModel[]> {

    // Fake webservice cache
    if(this.comments[imageId]) return Promise.resolve(this.comments[imageId]);
    // Fake webservice request
    return new Promise<CommentModel[]>((resolve, reject) => {

      const commentsJSON:any = require('./comments.json');
      this.comments = new Map<string, CommentModel[]>();
      for(const id in commentsJSON){
        this.comments.set(
          id, 
          commentsJSON[id].map(commentJSON => new CommentModel(commentJSON))
        );
      }
      
      resolve(this.comments.get(imageId) || []);

    });

  }

  public async postComment(imageId:string, comment:CommentModel) : Promise<CommentModel> {

    if(!this.comments[imageId]) this.comments[imageId] = await this.getComments(imageId);
    
    return new Promise<CommentModel>((resolve, reject) => {

      this.comments[imageId].push(comment);
      resolve(comment);

    });

  }



}