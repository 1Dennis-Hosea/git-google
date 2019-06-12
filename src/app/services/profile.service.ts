import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  clientid = 'fb896d286b2cde60b103';
  clientsecret = 'b74cbf62ad77a9c6e60cc653f286204a65c84fbf';

  constructor(private http: Http) {
    console.log("service is now availabe!");
    this.username = '1Dennis-Hosea';
  }
  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }
  getReposInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
