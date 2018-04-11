import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component'; // Landing page, gets replaced dynamically by RouterModule
import { ListComponent } from './list/list.component'; // List of all posts that match a given search *NOT IMPLEMENTED YET*
import { PostComponent } from './post/post.component'; // Single post layout component


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ListComponent,
    PostComponent
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    PostComponent
  ]
})
export class PagesModule { }
