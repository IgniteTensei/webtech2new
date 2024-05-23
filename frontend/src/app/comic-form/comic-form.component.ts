import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comic } from '../models/Comic';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-form',
  templateUrl: './comic-form.component.html',
  styleUrls: ['./comic-form.component.css']
})
export class ComicFormComponent {
  comic: Comic = new Comic();
  types: string[] = ['Manga', 'Light Novel', 'Comic'];
  conditions: string[] = ['Used', 'New'];
  formats: string[] = ['Paperback', 'Hardback'];
  comics: Comic[] = [];

  comicForm = this.fb.group({
    title: [null, Validators.required],
    author: [null, Validators.required], 
    publisher: [null, Validators.required],
    pages: [null, Validators.required],
    type: [null, Validators.required], 
    releaseDate: [null, Validators.required],
    synopsis: [null, Validators.required], 
    price: [null, Validators.required], 
    condition: [null, Validators.required], 
    isbn: ['', [Validators.required, Validators.pattern(/^\d{13}/)]], 
    format: [null, Validators.required] 
  });

  constructor(private fb: FormBuilder, private appService: AppService, private router: Router) {
    this.fetchComics();
  }

  fetchComics() {
    this.appService.readComic().subscribe(
      (comics: Comic[]) => {
        this.comics = comics;
      },
      (error) => {
        console.error('Error fetching comics:', error);
      }
    );
  }

  onSubmit() {
    if (this.comicForm.valid) {
      const existingComic = this.comics.find(comic => comic.title === this.comicForm.value.title);
      if (existingComic) {
        // Display error message if title already exists
        alert('This comic already exists in the list!');
      } else {
        // Proceed with submitting the form if title doesn't exist
        const comic: Comic = this.comicForm.value;
        this.appService.createComic(comic).subscribe(
          () => {
            this.comicForm.reset();
            alert('Comic submitted successfully!');
          }, 
          (error) => {
            alert('Error on submission!');
          }
        );
     }
    }
  }

  goBack() {
    this.router.navigate(['/list']);
  }

}