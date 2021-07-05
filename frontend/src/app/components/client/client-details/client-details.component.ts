import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { ClientDetails } from './../../client.model';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  clientDetails: ClientDetails[]
  id = this.route.snapshot.paramMap.get("id")

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientService.getClientEnterprises(this.id).subscribe(clientDetails => {
      this.clientDetails = clientDetails
    })
  }
}
