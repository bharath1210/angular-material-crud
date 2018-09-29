import { Component, OnInit } from '@angular/core';
import { BookCreateService } from '../../services/book-create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user: any = {};
  constructor(
    private bookServ: BookCreateService,
    private router: Router
  ) { }
  createBook() {
    this.bookServ.bookPost(this.user)
      .subscribe((data) => {
        this.router.navigate(['/view']);
      },
        (error) => {
          console.log(error);
        });
  }
  ngOnInit() {
  }

}
