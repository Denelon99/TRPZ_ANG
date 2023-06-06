import { Component } from '@angular/core';
import { HttpapiService } from '../services/httpapi.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent {
  siteData: undefined;

  constructor(private httpas: HttpapiService, public authService: AuthService) { }

  ngOnInit() {
    this.httpas.getDate().subscribe((data) => {
      this.siteData = data;
    });
  }
  logout() {
    this.authService.logout();
  }
}