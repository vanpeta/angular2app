import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', /*selector syntax for a html atribute */
  selector: '.app-servers', /*selector syntax for a html class */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverName = "";
  serverCreated = false;
  servers = ['Testserver', 'Testserver2']

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit() {
  }
  onCreateServer () {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }
  onUpdateServerName (event: Event) { /*this method is only called in the one way bing example */
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
}
