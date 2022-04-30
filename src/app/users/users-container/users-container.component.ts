import { AfterViewInit, Component } from '@angular/core';
import { User } from 'src/app/domain';
import { DbUserService } from 'src/app/lib/db-user.service';

@Component({
  selector: 'lu-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements AfterViewInit {
  public users: readonly User[] = [];
  public cards:any;
  public pastUsersLen:number = 0;
  public i:number = 0;

  constructor(private dbUserServices: DbUserService) { }

  public addUsers(amount: number) {
    this.dbUserServices.getUsers(amount, this.users.length).then((users:readonly User[]) => {
      this.users = this.users.concat(users);
    })
  }

  public print(i:number) { 
    console.log(this.cards.item(i));
  }

  ngAfterViewInit(): void {
    this.addUsers(5);
    
    document.addEventListener('scroll', () => {
      this.cards = document.getElementsByClassName('user-card');
      if (this.cards.item(this.i).getBoundingClientRect().bottom < 100) {
        this.addUsers(1)
        this.i += 1;
      }
    });
  }

}
