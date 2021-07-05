import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../../../services/client.service';
import { ClientDetailsTotals } from './../../../client.model';

@Component({
  selector: 'app-client-details-totals',
  templateUrl: './client-details-totals.component.html',
  styleUrls: ['./client-details-totals.component.css']
})
export class ClientDetailsTotalsComponent implements OnInit {

  clientDetailsTotals: ClientDetailsTotals[]

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.clientService.getTotalsByCompany(id).subscribe(clientDetailsTotals => {
      this.clientDetailsTotals = clientDetailsTotals
    })
  }

}
