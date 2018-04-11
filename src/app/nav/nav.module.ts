import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAppModule } from '@app/ngmat/ngmat.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavService } from './sidenav/sidenav.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule,
    FlexLayoutModule
  ],
  exports: [
    TopnavComponent,
    FooterComponent
  ],
  declarations: [
    TopnavComponent,
    FooterComponent
  ],
  providers: [SidenavService]
})
export class NavModule { }
