import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpApiService } from '../services/httpapi.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent {
  users: any[] | undefined;

  constructor(
    private HttpApiService: HttpApiService,
    public authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
    this.HttpApiService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
    );
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
