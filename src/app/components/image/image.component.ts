import { Component, Input } from '@angular/core';
import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'image',
  template: require('./image.template.html'),
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() image:ImageModel;
}