import '../polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ModalComponent } from './components/modal/modal.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { enableProdMode } from '@angular/core';

// initialize app
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageComponent,
    CommentsComponent,
    ModalComponent,
    CommentFormComponent
  ]
})
export class AppModule {}

enableProdMode();