import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from "./environment-url.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Owner } from "../../_interfaces/Owner.model";
import {OwnerForCreation} from "../../_interfaces/OwnerForCreation.model";

@Injectable({
  providedIn: 'root'
})
export class OwnerRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  public getOwners = (route: string) => {
    return this.http.get<Owner[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public getOwner = (route: string) => {
    return this.http.get<Owner>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public createOwner = (route: string, owner: OwnerForCreation) => {
    return this.http.post<Owner>(this.createCompleteRoute(route, this.envUrl.urlAddress), owner, this.generateHeaders());
  }

  private createCompleteRoute = (route: string, envAddress: string ) => {
    return `${envAddress}/${route}`
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

}
