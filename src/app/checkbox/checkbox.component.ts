import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }
  
}
