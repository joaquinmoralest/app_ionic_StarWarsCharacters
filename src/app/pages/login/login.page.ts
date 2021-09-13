import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'Bienvenido';
  nombre = '';
  apellido = '';

  constructor() { }

  ngOnInit() {
  }

}
