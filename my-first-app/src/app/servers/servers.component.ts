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
    serverName = 'Test Server';
constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 3000);
}

onCreateServer() {
    this.serverCreationStatus = 'Server is created';
}

onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
}

ngOnInit() {}

}
