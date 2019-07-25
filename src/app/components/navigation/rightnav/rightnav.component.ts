import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rightnav',
  templateUrl: './rightnav.component.html',
  styleUrls: ['./rightnav.component.css']
})
export class RightnavComponent implements OnInit {
  @Input() list;
  cur;
  constructor(private router:Router, private location:Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cur = this.location.path();
  }

}
