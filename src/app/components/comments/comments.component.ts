import { Component, Input } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentModel } from '../../models/comment.model';

/**
 * @class CommentsComponent
 * Component for listing comments in an image's thread
 * Receives an array of CommentModels to display
 */
@Component({
  selector: 'comments',
  template: require('./comments.template.html'),
  styleUrls: ['./comments.component.scss'],
  providers: [CommentsService]
})
export class CommentsComponent {

  // array of CommentModels to display
  @Input() comments:CommentModel[];

}