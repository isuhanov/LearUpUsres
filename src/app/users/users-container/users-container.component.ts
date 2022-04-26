import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain';
import { DbUserService } from 'src/app/lib/db-user.service';

@Component({
  selector: 'lu-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements AfterViewInit {
  public users: readonly User[] = [];

  constructor(private dbUserServices: DbUserService) { }

  ngAfterViewInit(): void {
    this.dbUserServices.readAll().then((users:readonly User[]) => {
      this.users = users;
    })
  }

}
