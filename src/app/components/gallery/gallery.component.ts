import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { ImagesService } from '../../services/images.service';
import { CommentsService } from '../../services/comments.service';
import { ImageModel } from '../../models/image.model';
import { CommentModel } from '../../models/comment.model';
import { ModalComponent } from '../modal/modal.component';

/**
 * @class GalleryComponent
 * Component for rendering a listing of image thumbnails and handling
 * the creation of a modal to display a larger image
 */
@Component({
  selector: 'gallery',
  template: require('./gallery.template.html'),
  styleUrls: ['./gallery.component.scss'],
  providers: [
    ImagesService,
    CommentsService
  ],
})
export class GalleryComponent implements AfterViewInit {

  @ViewChild(ModalComponent) modal:ModalComponent;
  private modalVisible:boolean;

  private images:Map<string, ImageModel>;
  private imageModels:ImageModel[];
  private selectedImageId:string;

  public constructor(private imagesService:ImagesService, private commentsService:CommentsService) {
    this.modalVisible = false;
    this.loadImages();
  }

  ngAfterViewInit(){}

  /** loads image map and models */
  public async loadImages(){
    try {
      this.images = await this.imagesService.getImages();
      this.imageModels = [...this.images.values()]; // TypeScript is not sure if this is an array, so create an array
    } catch (e) {
      console.log(e);
    }
  }

  showModal(imageId:string) {
    this.modal.show(imageId);
    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
  }

}