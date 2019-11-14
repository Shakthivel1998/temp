import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rmc',
  templateUrl: './rmc.component.html',
  styleUrls: ['./rmc.component.css']
})
export class RmcComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  model: string;
  @Input()
  year: string;
  @Input()
  price: string;

  constructor() { }

  ngOnInit() {
  }

}
