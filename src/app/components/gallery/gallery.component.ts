import { Component } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { ImagesService } from '../../services/images.service';
import { CommentsService } from '../../services/comments.service';
import { ImageModel } from '../../models/image.model';
import { CommentModel } from '../../models/comment.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'gallery',
  template: require('./gallery.template.html'),
  providers: [
    ImagesService,
    CommentsService
  ]
})
export class GalleryComponent {

  private images:Map<string, ImageModel>;

  public constructor(private imagesService:ImagesService, private commentsService:CommentsService) {
    this.loadImages();
  }

  public async loadImages(){
    try {
      this.images = await this.imagesService.getImages();
    } catch (e) {
      console.log(e);
    }
  }

}