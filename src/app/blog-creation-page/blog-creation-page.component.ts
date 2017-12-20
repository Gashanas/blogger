import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog-creation-page',
    templateUrl: './blog-creation-page.component.html',
    styleUrls: ['./blog-creation-page.component.css']
})
export class BlogCreationPageComponent implements OnInit {

    username: string;
    title: string;
    layout: string;
    font: string;
    color: string;
    name: string;
    surname: string;
    error: any;
    blog: Blog;
    fetchedBlog: Blog;
    titleWithoutSpaces: string;

    // blog: Blog;

    constructor(private blogService: BlogService, private router: Router) {
    }

    ngOnInit() {
        // this.blog= new Blog(this.surname, this.title, this.layout, this.font, this.color, this.name,this.surname);
    }

    onSubmit() {
        this.blog = new Blog({
            id: null,
            username: this.username,
            title: this.title,
            layoutStyle: +this.layout,
            font: this.font,
            background: this.color,
            name: this.name,
            surname: this.surname
        });
        console.log(this.blog);
        this.titleWithoutSpaces = this.title.split(' ').join('+');
        console.log(this.titleWithoutSpaces);
        this.blogService.createNewBlog(this.blog).subscribe(
            (success) => {
                console.log('sucessss');
                this.navigateToBlogPage();
            },
            (error) => this.setErrorMessage(),
            () => {console.log('asdaskdaskd')}
        );
        setTimeout(() => {
            this.navigateToBlogPage();
        }, 1000);
    }

    navigateToBlogPage() {
        this.router.navigate(['blog/'+this.titleWithoutSpaces]);
    }

    fetchBlogInfo(title: string) {
        this.blogService.getBlogInfo(title).subscribe(
            (blog) => {
                this.fetchedBlog = blog;
                console.log(this.fetchedBlog);
            },
            (error) => this.setErrorMessage(),
            () => console.log("asjdajjasgd")
        );
    }

    isReadyForSubmit() {
        return this.username && this.title && this.layout && this.font && this.color && this.name && this.surname;
    }

    cancel(){
        this.router.navigate(['home']);
    }

    setErrorMessage() {
        this.error = "something went wrong :/";
        setTimeout(() => {
            this.error = '';
        }, 2000);
    }


}
