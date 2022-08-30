import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PhotoPage } from './photo-page/photo-page.component';
import { ImageComponent } from './image/image.component';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [AppComponent, PhotoPage, ImageComponent, NavigationButtonComponent, CommentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
