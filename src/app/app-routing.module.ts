import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './routes/detail-user/detail-user.component';
import { HomeComponent } from './routes/home/home.component';
import { UserListComponent } from './routes/user-list/user-list.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'angular', component:UserListComponent },
  { path: 'angular/:uuid', component: DetailUserComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
