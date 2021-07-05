import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Clients } from './../../client.model';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements OnInit {

  clients: Clients[] 

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(clients => {
      this.clients = clients
    })
  }

}
