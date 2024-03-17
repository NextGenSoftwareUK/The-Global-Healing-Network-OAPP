import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BlogComponent } from '../blog/blog.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,   
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "blog",
                component: BlogComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
