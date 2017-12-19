import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    title: string

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    navigateToBlogCreationPage() {
        this.router.navigate(['customize'])
    }

    openBlog(){
        console.log(this.title);
    }

}
