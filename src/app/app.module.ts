import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminComponent } from './user/admin/admin.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClientComponent } from './client/add-client/add-client.component';

import { AddFComponent } from './fournisseurs/add-f/add-f.component';
import { ListFComponent } from './fournisseurs/list-f/list-f.component';
import { UpdateFComponent } from './fournisseurs/update-f/update-f.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminComponent,
 
    LoginComponent,
    DashboardComponent,
    AddClientComponent,
   
    AddFComponent,
    ListFComponent,
    UpdateFComponent,
    AddProduitComponent,
    ListProduitComponent,
    UpdateProduitComponent,
    ListClientComponent,
    UpdateClientComponent,
 
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
