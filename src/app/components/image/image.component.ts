import { Component, Input } from '@angular/core';
import { ImageModel } from '../../models/image.model';

/**
 * @class ImageComponent
 * Component for displaying an image with a dynamic/external URL
 * Receives an ImageModel to display
 */
@Component({
  selector: 'image',
  template: require('./image.template.html'),
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  /** the ImageModel to display */
  @Input() image:ImageModel;
}