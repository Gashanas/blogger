import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    title: string;
    error: any;
    blog : Blog;

    constructor(private router: Router, private blogService: BlogService) {
    }

    ngOnInit() {
    }

    // navigateToBlogCreationPage() {
    //     this.router.navigate(['customize'])
    // }

    openBlog(){
        console.log(this.title);
    }

    getBlog(){
        console.log(this.title);
        this.blogService.getBlogInfo(this.title).subscribe(
            (blog) => {
                this.blog = blog;
                console.log(this.blog,blog);
                if(this.blog.id){
                    this.error = '';
                    this.router.navigate(['blog/'+this.title])
                }
            },
            error => {
            }
        );

        setTimeout(() => {
            this.error = "blog does not exist";
        }, 2000);
    }

}
