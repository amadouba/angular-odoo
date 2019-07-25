import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  @Input() clicked : string = '' ;
  constructor() { }

  ngOnInit() {
  }

}
