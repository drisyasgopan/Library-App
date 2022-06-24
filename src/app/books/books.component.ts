import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: BookModel[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
        this.books=JSON.parse(JSON.stringify(data));
    })
  }

}
