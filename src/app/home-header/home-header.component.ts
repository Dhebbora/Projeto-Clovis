import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  title = 'Vilka!';
  routerLink: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(['']);
  }
}
