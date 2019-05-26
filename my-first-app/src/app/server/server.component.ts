import { Component } from '@angular/core';

@Component({
   selector: 'app-server',
   templateUrl: './server.component.html',
   styleUrls: ['./server.component.scss']
})
export class ServerComponent {
   serverId = 30;
   serverStatus = '';

   constructor() {
      if (Math.random() > 0.5 ) {
         this.serverStatus = 'online';
      } else {
         this.serverStatus = 'offline';
      }
   }

   getServerStatus() {
      return this.serverStatus;
   }

   getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
   }
}


