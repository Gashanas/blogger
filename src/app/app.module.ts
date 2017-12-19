import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogCreationPageComponent } from './blog-creation-page/blog-creation-page.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ModalComponent } from './shared/modal/modal.component';
import { NavComponent } from './nav/nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    BlogCreationPageComponent,
    HomeComponent,
    ArticleComponent,
    ModalComponent,
    NavComponent,
  ],
  imports: [
      FormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
