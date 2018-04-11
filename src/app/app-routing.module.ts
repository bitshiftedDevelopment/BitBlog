import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {//INDEV
    path: 'blog',
    component: ListComponent,
  },
  {//INDEV
    path: 'post/:id',
    component: PostComponent
  }
  // {//INDEV
  //   path: 'blog-admin',
  //   component: BlogAdminConsoleComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
