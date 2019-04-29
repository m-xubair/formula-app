import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEquations } from 'src/app/manage-equations/manage-equations.component';
import { ViewEquationsComponent } from './view-equations/view-equations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-equations',
    pathMatch: 'full'
  },
  { path: 'view-equations', component: ViewEquationsComponent },
  { path: 'manage-equations', component: ManageEquations },
  { path: 'manage-equations/:id', component: ManageEquations }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
