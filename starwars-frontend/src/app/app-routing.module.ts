import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SecondComponentComponent } from './second-component/second-component.component';
import { BasicComponentComponent } from './basic-component/basic-component.component';

const routes: Routes = [
    { path: 'basic-component', component: BasicComponentComponent },
    { path: 'second-component', component: SecondComponentComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }