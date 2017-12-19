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

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    BlogCreationPageComponent,
    HomeComponent,
    ArticleComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
