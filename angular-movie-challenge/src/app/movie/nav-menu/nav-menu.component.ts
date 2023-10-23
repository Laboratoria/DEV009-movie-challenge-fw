import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  isExpanded: boolean = false;



  /*toggleSidenav(){
    this.sidenav.toggle();
  }*/

}
