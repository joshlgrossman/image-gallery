import { Component, EventEmitter, Output } from '@angular/core';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'comment-form',
  template: require('./comment-form.template.html'),
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {

  @Output() submitted:EventEmitter<CommentModel> = new EventEmitter<CommentModel>();
  private comment:CommentModel = new CommentModel();

  submit(){
    if(this.comment.user && this.comment.content){
      this.submitted.emit(this.comment.clone());
      this.comment = new CommentModel();
    }
  }

}