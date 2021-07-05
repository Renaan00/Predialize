import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { ClientId } from '../../client.model';

@Component({
  selector: 'app-client-id',
  templateUrl: './client-id.component.html',
  styleUrls: ['./client-id.component.css']
})
export class ClientIdComponent implements OnInit {

  clientId: ClientId[]

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.clientService.getById(id).subscribe(clientId => {
      this.clientId = clientId
    })
  }

}
