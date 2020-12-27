import { Routes } from '@angular/router';


import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { NotificationsComponent } from '../../notifications/notifications.component';
import { AddUserComponent } from 'app/user/add-user/add-user.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

import { ListFComponent } from 'app/fournisseurs/list-f/list-f.component';
import { ListProduitComponent } from 'app/produit/list-produit/list-produit.component';
import { ListClientComponent } from 'app/client/list-client/list-client.component';
import { UpdateClientComponent } from 'app/client/update-client/update-client.component';
import { AffichClientComponent } from 'app/client/affich-client/affich-client.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
  
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'notifications',  component: NotificationsComponent },

     { path: 'client', 
      children: [
        {
           path: '',
           component: ListClientComponent
           }
           , {
            path: 'update/:id',
           component: UpdateClientComponent
           },
           {
            path: 'affich/:id',
           component: AffichClientComponent
           }] },



    { path: 'fournisseur',  component: ListFComponent },
    { path: 'produit',  component: ListProduitComponent },
    { path: 'user',  component: AddUserComponent }

];
