import { Component, OnInit, OnChanges } from '@angular/core';
import { BookCreateService } from '../../services/book-create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnChanges {
  books: any = [];
  constructor(
    private bookServ: BookCreateService,
    private router: Router
  ) {

  }

  showBook() {

    this.bookServ.bookGet()
      .subscribe((data) => {
        // console.log(data)
        this.books = data;
      },
        (error) => {
          console.log(error);
        });
  }


  deleteBook(book) {
    this.bookServ.bookDelete(book)
      .subscribe((data: any) => {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i]._id === data._id) {
            return this.books.splice(i, 1);
          }

        }
        this.router.navigate(['/view']);
        console.log('deleted');
      });
  }

  ngOnInit() {
    this.showBook();
  }
  ngOnChanges() {
    this.showBook();
  }

}
