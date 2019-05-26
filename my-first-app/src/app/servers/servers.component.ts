import {
Component,
OnInit
} from '@angular/core';

@Component({
selector: 'app-servers',
templateUrl: './servers.component.html',
styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No Servers Created';
    serverName = '';
    serverCreated = false;

constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 3000);
}

onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server is created ' + this.serverName;
}

onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
}

ngOnInit() {}

}
