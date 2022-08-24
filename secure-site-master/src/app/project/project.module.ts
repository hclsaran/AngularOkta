import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  imports: [
    CommonModule
    // ProjectRoutingModule
  ],
  declarations: [MyProjectsComponent]
})
export class ProjectModule { }
