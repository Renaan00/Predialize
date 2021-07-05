import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientDetailsName } from '../../client.model';

@Component({
  selector: 'app-client-details-name',
  templateUrl: './client-details-name.component.html',
  styleUrls: ['./client-details-name.component.css']
})
export class ClientDetailsNameComponent implements OnInit {

  id = this.route.snapshot.paramMap.get("id")
  name: string
  error: string
  clientDetailsName: ClientDetailsName[]

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getClientDetailsName(): void {
    this.clientService.getClientDetailsByName(this.id, this.name).subscribe(clientDetailsName => {
      this.clientDetailsName = clientDetailsName
      this.error = ""
    }, (error) => {
      if (error) {
        this.clientDetailsName = []
        this.error = "Não encontrado"
      }
    })
  }

}
