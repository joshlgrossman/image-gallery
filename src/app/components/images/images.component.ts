import { Component } from '@angular/core';

@Component({
  selector: 'images',
  template: require('./images.template.html')
})
export class ImagesComponent {

  public images = require('./images.json');

}