import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { CommentModel } from '../models/comment.model';

/**
 * @class CommentsService
 * Service for getting and posting comments to an image's thread
 * In reality, the methods in this class would make an AJAX request
 * to get/post data.  In lieu of this, I'm returning promises from
 * these methods to simulate the Observable async behavior of HTTP requests
 */
@Injectable()
export class CommentsService {

  /** cached comments map (imageId -> [array of comments]) */
  private comments:Map<string, CommentModel[]>;

  public constructor(@Inject(Http) private http:Http){ 
    this.comments = new Map<string, CommentModel[]>();
  }

  /**
   * Get comments for a specific image
   * @param imageId the image id to retrieve comment listing for
   * @returns promise of array of CommentModels
   */
  public async getComments(imageId:string) : Promise<CommentModel[]> {

    // Fake webservice cache
    if(this.comments.get(imageId)) return Promise.resolve(this.comments.get(imageId));
    // Fake webservice request, in reality a HTTP request would be made here, something like:
    /*
      return this.http.get('/images')
                .map(res => new ImageModel(res.json().data))
                .catch(console.log)
    */
    return new Promise<CommentModel[]>((resolve, reject) => {

      const commentsJSON:any = require('./comments.json')[imageId] || [];      
      this.comments.set(imageId, commentsJSON.map(commentJSON => new CommentModel(commentJSON)));
      resolve(this.comments.get(imageId));

    });

  }

  /**
   * Posts a comment to an image's thread
   * @param imageId the image id to add the comment to
   * @param comment the comment to be added
   * @returns promise of updated array of CommentModels 
   */
  public async postComment(imageId:string, comment:CommentModel) : Promise<CommentModel> {

    if(!this.comments.get(imageId)) this.comments.set(imageId, await this.getComments(imageId));
    
    return new Promise<CommentModel>((resolve, reject) => {

      this.comments.get(imageId).push(comment);
      resolve(comment);

    });

  }



}