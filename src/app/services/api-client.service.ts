import { Injectable } from '@angular/core';

import axios from 'axios';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  baseUrl:string;

  constructor() {
    this.baseUrl = 'http://localhost:4641/api'
  }

  async get(url:string,options:object):Promise<any>{
    try {
      const a = await axios.get(`${this.baseUrl}${url}`,{params:options})
      return a
    } catch (e) {
      alert('Erreur de connexion')
      return null
    }
  }
}
