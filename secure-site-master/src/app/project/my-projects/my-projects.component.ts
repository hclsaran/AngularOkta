import { Component, OnInit } from '@angular/core';
import { OktaService } from '../../authenticate/okta.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  public userName: string;

  constructor(private oktaService: OktaService) {

  }

  public ngOnInit() {
    const claims = this.oktaService.getClaims();
    if (claims) {
      console.log(claims);
      this.userName = claims['name'];
    }

  }

}
