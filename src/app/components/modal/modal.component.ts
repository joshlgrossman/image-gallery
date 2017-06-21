import { Component, EventEmitter, Output } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { ImagesService } from '../../services/images.service';
import { CommentsService } from '../../services/comments.service';
import { ImageModel } from '../../models/image.model';
import { CommentModel } from '../../models/comment.model';

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
  private image:ImageModel;
  private comments:CommentModel[];

  public constructor(private imagesService:ImagesService, private commentsService:CommentsService) {}

  public async show(imageId:string) {
    try {
      this.image = await this.imagesService.getImage(imageId); 
      this.comments = await this.commentsService.getComments(imageId);
    } catch (e) {
      console.log(e);
    }
  }

  public hide() {
    this.closed.emit(null);
  }

}