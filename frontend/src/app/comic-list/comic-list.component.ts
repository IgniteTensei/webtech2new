import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Comic } from '../models/Comic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css'],
})

export class ComicListComponent implements OnInit {
  input: number;
  comics: Comic[];

  displayedColumns: string[] = ['title', 'author', 'publisher', 'pages', 'type', 'releaseDate', 'synopsis', 'price', 'condition', 'isbn', 'format', 'delete'];
  dataSource = new MatTableDataSource();

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getComics();
    this.dataSource = new MatTableDataSource(this.comics);
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  getComics() {
    this.appService.readComic().subscribe(comics => {
      this.comics = comics;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(this.comics);
    }, () => {
      alert("Error occurred during the reading.");
    });
  }


  deleteComic(comic: Comic) {
    this.appService.deleteComic(comic).subscribe(() => {
      alert(comic.title + ' has been successfully deleted.');
      this.getComics();
    }, () => {
      alert("Error occurred during delete.");
      this.getComics();
    });
  }

  updateComic(comic: Comic, value: number) {
    this.appService.updateComic(comic).subscribe(() => {
      alert("The amount has been successfully submitted.");
      this.getComics();
    }, () => {
      alert("Error occurred during submit.");
      this.getComics();
    });
  }

  goToForm() {
    this.router.navigate(['/form']); // Assuming '/comic-form' is the route for your form page
  }
}