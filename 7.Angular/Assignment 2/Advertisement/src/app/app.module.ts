import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';
import { AdvertisementTableComponentComponent } from './advertisement-table-component/advertisement-table-component.component';
import { EditProductComponentComponent } from './edit-product-component/edit-product-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './search-filter.pipe';
import { AdvertisementServiceService } from './advertisement-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementFormComponentComponent,
    AdvertisementTableComponentComponent,
    EditProductComponentComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AdvertisementServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
