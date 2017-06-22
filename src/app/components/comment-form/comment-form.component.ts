import { Component, EventEmitter, Output } from '@angular/core';
import { CommentModel } from '../../models/comment.model';

/**
 * @class CommentFormComponent
 * Component for posting new comments in an image's thread
 * Dispatches a 'submitted' event upon successful submission
 * Event contains a CommentModel object representing new submission
 */
@Component({
  selector: 'comment-form',
  template: require('./comment-form.template.html'),
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {

  // submitted event emitter
  @Output() submitted:EventEmitter<CommentModel> = new EventEmitter<CommentModel>();
  // model representing form's data
  private comment:CommentModel = new CommentModel();

  public reset(){
    this.comment = new CommentModel();
  }

  submit(){
    if(this.comment.user && this.comment.content){
      this.submitted.emit(this.comment.clone());
      this.reset();
    }
  }

}