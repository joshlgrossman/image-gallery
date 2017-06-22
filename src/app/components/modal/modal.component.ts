import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { ImagesService } from '../../services/images.service';
import { CommentsService } from '../../services/comments.service';
import { ImageModel } from '../../models/image.model';
import { CommentModel } from '../../models/comment.model';
import { CommentFormComponent } from '../comment-form/comment-form.component';

/**
 * @class ModalComponent
 * Component for displaying an image and a list of its comments
 * Emits a 'closed' event upon closing
 */
@Component({
  selector: 'modal',
  template: require('./modal.template.html'),
  styleUrls: ['./modal.component.scss'],
  providers: [
    ImagesService,
    CommentsService
  ]
})
export class ModalComponent {

  /** closed event emitter */
  @Output() closed:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(CommentFormComponent) form:CommentFormComponent;

  /** the ImageModel to display */
  private image:ImageModel;
  /** the array of CommentModels to display */
  private comments:CommentModel[];

  public constructor(private imagesService:ImagesService, private commentsService:CommentsService) {}

  /** load image and comments */
  public async show(imageId:string) {
    try {
      this.image = await this.imagesService.getImage(imageId); 
      this.comments = await this.commentsService.getComments(imageId);
    } catch (e) {
      console.log(e);
    }
  }

  /** reset and hide form */
  public hide() {
    this.form.reset();
    this.closed.emit(null);
  }

  /** post comment to service */
  public async postComment(comment:CommentModel){
    this.commentsService.postComment(this.image.id, comment);
  }

}