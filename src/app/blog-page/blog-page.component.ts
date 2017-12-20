import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  sub: any;
  title: any;
  error: string;
  blog: Blog;
  posts: Post[] = [];
  postMessage: string;
  postTitle: string;
  postErroro: string;

  constructor(
      private blogService: BlogService,
      private route: ActivatedRoute,
      private router: Router) {
    this.sub = this.route.params.subscribe(params => this.title = params);
  }

  ngOnInit() {
    this.title = this.title.title.split('+').join(' ');
    console.log(this.title);
    this.blogService.getBlogInfo(this.title).subscribe(
        (blog) => {
          console.log(blog);
          this.blog = blog;
          this.getPosts();
        },
        error => {
          this.error = "somenthig went wrong";
        }
    );
    // this.title = this.title.split('+').join(' ');
    // console.log(this.title);
  }

  getPosts() {

    this.blogService.getPosts(this.title).subscribe(
        posts => {
          this.posts = posts;
          console.log(posts);
        },
        errror => {
          this.error = "something went wrong";
        }
    );
  }

  addPost() {
    console.log(this.postMessage, this.postTitle);
    if((!this.postMessage || this.postMessage === '') /*&& (!this.postTitle || this.postTitle === '')*/ ){
      this.postErroro = "Please fill in all fields";
    } else {
      this.postErroro = '';
      this.blogService.savePost(this.postMessage, this.postTitle, this.blog).subscribe(
          success => {
            this.posts.push(success);
            console.log(success);
          }
      );
      this.postMessage = '';
      this.postTitle = '';
    }
  }

}
