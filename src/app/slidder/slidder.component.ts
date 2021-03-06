import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slidder',
  templateUrl: './slidder.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./slidder.component.css']
})
export class SlidderComponent implements OnInit {
  autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
    vertical = false;

    get tickInterval(): number | 'auto' {
      return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
    }
    set tickInterval(v) {
      this._tickInterval = Number(v);
    }
    private _tickInterval = 1;
  constructor() { }

  ngOnInit() {
  }

}
