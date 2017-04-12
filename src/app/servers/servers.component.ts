import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', /*selector syntax for a html atribute */
  selector: '.app-servers', /*selector syntax for a html class */
  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
