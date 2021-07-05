import { Component, OnInit } from '@angular/core';
import { ClientName } from '../../client.model';
import { ClientService } from './../../services/client.service';

@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.css']
})
export class ClientNameComponent implements OnInit {

  name: string
  error: string
  clientName: ClientName[]

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  getClientName(): void {
    this.clientService.getByName(this.name).subscribe(clientName => {
      this.clientName = clientName
      this.error = ""
    }, (error) => {
      if (error) {
        this.clientName = []
        this.error = "Não encontrado"
      }
    })
  }

}
