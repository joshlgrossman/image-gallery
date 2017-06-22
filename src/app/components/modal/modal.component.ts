import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { ImagesService } from '../../services/images.service';
import { CommentsService } from '../../services/comments.service';
import { ImageModel } from '../../models/image.model';
import { CommentModel } from '../../models/comment.model';
import { CommentFormComponent } from '../comment-form/comment-form.component';

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

  @Output() closed:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(CommentFormComponent) form:CommentFormComponent;

  private image:ImageModel;
  private comments:CommentModel[];
  private imageId:string;

  public constructor(private imagesService:ImagesService, private commentsService:CommentsService) {}

  public async show(imageId:string) {
    try {
      this.imageId = imageId;
      this.image = await this.imagesService.getImage(imageId); 
      this.comments = await this.commentsService.getComments(imageId);
    } catch (e) {
      console.log(e);
    }
  }

  public hide() {
    this.form.reset();
    this.closed.emit(null);
  }

  public async postComment(comment:CommentModel){
    this.commentsService.postComment(this.imageId, comment);
  }

}