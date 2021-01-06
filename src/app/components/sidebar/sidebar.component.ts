import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'Mon Profile',  icon:'person', class: '' },
    { path: '/user', title: 'Users',  icon:'people', class: '' },
    { path: '/produit', title: 'Produits',  icon:'local_grocery_store', class: '' },
    { path: '/client', title: 'Clients',  icon:'directions_walk', class: '' },
    { path: '/fournisseur', title: 'Fournisseurs',  icon:'business', class:'' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
     { path: '/commande', title: 'Commandes',  icon:'fact_check', class: '' },
     { path: '/facture', title: 'Factures',  icon:'business_center', class:'' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
