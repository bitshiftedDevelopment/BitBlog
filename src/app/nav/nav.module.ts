import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TopnavComponent,
    SidenavComponent
  ],
  declarations: [
    TopnavComponent,
    SidenavComponent
  ]
})
export class NavModule { }
