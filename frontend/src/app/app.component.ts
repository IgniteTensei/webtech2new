import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comic Store';

  constructor(private router: Router) {}

  goToWelcomePage() {
    this.router.navigate(['/welcome']);
  }
}


