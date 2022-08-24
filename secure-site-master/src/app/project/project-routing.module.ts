import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AuthGuard } from '../authenticate/auth.guard';

const routes: Routes = [
  { path: 'project', component: MyProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
