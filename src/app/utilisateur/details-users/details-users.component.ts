import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details-users',
  templateUrl: './details-users.component.html',
  styleUrls: ['./details-users.component.css']
})
export class DetailsUsersComponent implements OnInit {

  id:number;
  user : User;
  constructor(private route: ActivatedRoute, private userService :UserService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];

    this.user = new User();
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    })
  }

}
