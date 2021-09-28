import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.component.html',
  styleUrls: ['./ingreso-usuario.component.css']
})
export class IngresoUsuarioComponent implements OnInit {
  email: "jesusyjuan@gmail.com";
  password: 123456;
  constructor() { }

  ngOnInit() {
  }
  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
