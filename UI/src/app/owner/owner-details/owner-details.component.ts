import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwnerRepositoryService} from "../../shared/services/owner-repository.service";
import {Owner} from "../../_interfaces/Owner.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorHandlerService} from "../../shared/services/error-handler.service";
import {Account} from "../../_interfaces/Account.model";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

  owner: Owner;
  errorMessage: string = '';

  constructor(private repository: OwnerRepositoryService, private router: Router,
              private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getOwnerDetails();
  }

  getOwnerDetails = () => {
    const id: string = this.activeRoute.snapshot.params['id'];
    const apiUrl: string = `api/owner/${id}/account`;

    this.repository.getOwner(apiUrl)
      .subscribe({
        next: (own: Owner) => this.owner = own,
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
  }

  printToConsole= (param: Account) => {
    console.log('Account parameter from the child component', param)
  }

}
