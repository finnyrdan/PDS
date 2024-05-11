import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
    LayoutComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
