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

  public addUsers(amount: number) {
    this.dbUserServices.getUsers(amount, this.users.length).then((users:readonly User[]) => {
      this.users = this.users.concat(users);
    })
  }

  ngAfterViewInit(): void {
    this.addUsers(8);

    document.addEventListener('scroll', ()=>{
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      windowRelativeBottom < document.documentElement.clientHeight + 100 ? this.addUsers(2) : null;
    });
  }

}
