import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss'],
})
export class VehiculosComponent implements OnInit {
  public categorias = [
    { val: 'Todas', isChecked: true },
    { val: 'Sedan', isChecked: false },
    { val: '4x4', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.categorias);
  }

}
