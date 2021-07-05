import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../../services/client.service';
import { Totals } from './../../../client.model';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  totals: Totals[]

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getGeneralTotals().subscribe(totals => {
      this.totals = totals
    })
  }

}
