import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  public categorias = [
    { val: 'Todas', isChecked: true },
    { val: 'Sedan', isChecked: false },
    { val: '4x4', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {}

}
