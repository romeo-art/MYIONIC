import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import User from './model/userModel';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  constructor(private webReqService: WebRequestService) { }

  get_user(url: string){
    return this.webReqService.get(url)
  }

  create_user(url: string, user){
    return this.webReqService.post(url, user)
  }


}
