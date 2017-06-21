import { Component, Input } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'comments',
  template: require('./comments.template.html'),
  providers: [CommentsService]
})
export class CommentsComponent {

  @Input() comments:CommentModel[];


}