import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() buttonText!: string;
  @Input() buttonClass!: string; // Nueva propiedad de entrada para las clases de estilo

  constructor() { }

  ngOnInit(): void {
  }

}
