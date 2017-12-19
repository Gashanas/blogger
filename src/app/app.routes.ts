import { Routes} from '@angular/router'
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogCreationPageComponent } from './blog-creation-page/blog-creation-page.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'blog/:title',
                component: BlogPageComponent
            },
            {
                path: 'customize',
                component: BlogCreationPageComponent
            }
        ]
    }
]