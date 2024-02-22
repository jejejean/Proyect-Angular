import { Component } from '@angular/core';

type Dropdown = 'planificaViaje' | 'destinosVuelos' | 'servicios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  dropdownStates: { [key in Dropdown]: boolean } = {
    planificaViaje: false,
    destinosVuelos: false,
    servicios: false,
  };

  toggleDropdown(dropdown: Dropdown) {
    this.dropdownStates[dropdown] = !this.dropdownStates[dropdown];
  }
}