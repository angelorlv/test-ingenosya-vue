import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];

  constructor(private Api:ApiClientService) {
    this.users = []
   }

  async requestUser(count:number){
    if(this.users.length == 0){
      this.users =(await this.Api.get('/users',{
        seed:'angelorlv',
        country:'fr',
        count:count
      })).data
    }

  }


  getUsers():User[]{
    return this.users
  }

}
