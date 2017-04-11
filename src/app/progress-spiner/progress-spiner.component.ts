import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spiner',
  templateUrl: './progress-spiner.component.html',
  styleUrls: ['./progress-spiner.component.css']
})
export class ProgressSpinerComponent implements OnInit {
  color = 'praimry';
  mode = 'determinate';
  value = 50;

  constructor() { }

  ngOnInit() {
  }

}
