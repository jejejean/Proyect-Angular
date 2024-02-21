import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() id!: string;
  @Input() name!: string;
  constructor() {}

  ngOnInit(): void {}
}
