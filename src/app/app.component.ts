import { Component } from '@angular/core';
import { ApiClientService } from './services/api-client.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ingenosya';

  loaded:Boolean;

  constructor(private  UserService:UserService) {
    this.loaded = false
  }

  ngOnInit(): void {

    //Récupération des données du serveur si pas encore disponnible côté client
    this.loaded = false
    this.init()
    this.loaded = true
  }

  init(){
    //Chargemet des données
    this.UserService.requestUser(10)

  }
}
