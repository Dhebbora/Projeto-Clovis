import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  hide = true;
  routerLink: any = [];

  constructor(
    private router: Router
  ) { }

  acess(){
    this.router.navigate(['/base']);
  }

  showHide(){
    this.hide = !this.hide
  }

}
