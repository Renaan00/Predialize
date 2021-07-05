import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from './../../services/enterprise.service';
import { Enterprises } from './../../enterprise.model';

@Component({
  selector: 'app-all-enterprises',
  templateUrl: './all-enterprises.component.html',
  styleUrls: ['./all-enterprises.component.css']
})
export class AllEnterprisesComponent implements OnInit {

  enterprises: Enterprises[]

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit(): void {
    this.enterpriseService.getAllEnterprises().subscribe(enterprises => {
      this.enterprises = enterprises
    })
  }

}
