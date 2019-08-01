import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { RecepiesListComponent } from './recepies-list/recepies-list.component';
import { FormRecepiComponent } from './form-recepi/form-recepi.component';
import { ContentWrapComponent } from './content-wrap/content-wrap.component';


const routes: Routes = [
  {
    path: 'form-recepi',
    component: FormRecepiComponent
  },
  {
    path: '',
    component: ContentWrapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
