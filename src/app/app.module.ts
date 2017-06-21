import '../polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ModalComponent } from './components/modal/modal.component';
import { enableProdMode } from '@angular/core';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageComponent,
    CommentsComponent,
    ModalComponent
  ]
})
export class AppModule {}

// enableProdMode();