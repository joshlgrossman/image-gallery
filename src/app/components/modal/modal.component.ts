import { Component } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { ImagesService } from '../../services/images.service';
import { CommentsService } from '../../services/comments.service';
import { ImageModel } from '../../models/image.model';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'modal',
  template: require('./modal.template.html'),
  providers: [
    ImagesService,
    CommentsService
  ]
})
export class ModalComponent {

  private image:ImageModel;
  private comments:CommentModel[];
  private images:Map<string, ImageModel>;
  private imageIds:string[];
  private currentIndex:number;

  public constructor(private imagesService:ImagesService, private commentsService:CommentsService) {
    this.currentIndex = 0;
    this.loadImages().then(this.loadComments.bind(this));
  }

  public async loadImages(){
    try {
      this.images = await this.imagesService.getImages();  
      this.imageIds = [...this.images.keys()];
      this.image = this.images.get(this.imageIds[this.currentIndex]);
    } catch (e) {
      console.log(e);
    }
  }

  public async loadComments(){
    try {
      this.comments = await this.commentsService.getComments(this.imageIds[this.currentIndex]);
    } catch (e) {
      console.log(e);
    }
  }

}