import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { UserService } from "./services/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users$: Observable<User[]> = this.userService.getUsers();

  constructor(private userService: UserService) {}
}
