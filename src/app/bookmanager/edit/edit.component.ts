import { Component, OnInit } from '@angular/core';
import { BookCreateService} from '../../services/book-create.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
user: any = {};
userId: string;

  constructor(
    private bookServ: BookCreateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  editBook() {
    this.bookServ.bookEdit(this.user)
    .subscribe((data) => {
      this.router.navigate(['/view']);
    });
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.bookServ.bookGetById(this.userId)
    .subscribe( result => {
      this.user = result;
    });
  }

}
