import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Blog } from '../models/blog.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BlogService {
    blog: Blog;


    constructor(private http: Http) {
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json');
    }

    createNewBlog(blog: Blog) {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(
            `http://localhost:8080/user`,
            JSON.stringify({
                username: blog.username,
                title: blog.title,
                layoutStyle: blog.layoutStyle,
                font: blog.font,
                background: blog.background,
                name: blog.name,
                surname: blog.surname
            }), {headers})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    getBlogInfo(title: string) {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(
            `http://localhost:8080/user?title=`+title, {headers})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    getPosts(title: string) {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(
            `http://localhost:8080/user/post?title=`+title, {headers})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    savePost(post: string, postTitle: string, blog : Blog) {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(
            `http://localhost:8080/user/post`, JSON.stringify({post,postTitle,blog}), {headers})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        try {
            return Observable.throw(error.json().message);
        } catch (e) {
            return Observable.throw('Sorry, something went wrong');
        }
    }

}
