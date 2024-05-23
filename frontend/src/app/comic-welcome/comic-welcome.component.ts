import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-welcome',
  templateUrl: './comic-welcome.component.html',
  styleUrls: ['./comic-welcome.component.css']
})
export class ComicWelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onStart() {
    this.router.navigate(['/list']);
  }

}
