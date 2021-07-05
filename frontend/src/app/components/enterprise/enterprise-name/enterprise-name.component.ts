import { EnterpriseService } from './../../services/enterprise.service';
import { Component, OnInit } from '@angular/core';
import { EnterpriseName } from './../../enterprise.model';

@Component({
  selector: 'app-enterprise-name',
  templateUrl: './enterprise-name.component.html',
  styleUrls: ['./enterprise-name.component.css']
})
export class EnterpriseNameComponent implements OnInit {

  name: string
  error: string
  enterpriseName: EnterpriseName[]

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit(): void {
  }

  getEnterpriseName(): void {
    this.enterpriseService.getEnterpriseByName(this.name).subscribe(enterpriseName => {
      this.enterpriseName = enterpriseName
      this.error = ""
    }, (error) => {
      if (error) {
        this.enterpriseName = []
        this.error = "Não encontrado"
      }
    })
  }

}
