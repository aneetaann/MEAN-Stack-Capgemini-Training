import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';
import { EditProductComponentComponent } from './edit-product-component/edit-product-component.component';

const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'form', component: AdvertisementFormComponentComponent},
  {path:'edit/:title',component: EditProductComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
