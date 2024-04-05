import { Component } from '@angular/core';
import { User } from "../../interfaces/user";
import { UserTypesEnum } from "../../enums/user-types";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert/alert.service";
import { DuplicatedEntityError, UserService } from "../services/user/user.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  user: User = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: UserTypesEnum.Driver,
  };

  constructor(private userService: UserService, private alertService: AlertService, private router: Router){}

  onButtonCreateClick(newUser: unknown): void {
    try {
      this.userService.createUser(newUser as User);
      this.router.navigate(['user']);
      this.alertService.success({ title: 'User successfully created', subTitle: 'User has been created!'});
    } catch (err) {
      if (err instanceof DuplicatedEntityError) {
        this.alertService.error({ title: 'Wrong Username !', subTitle: 'Username has been existed already'});
        return;
      }
      this.alertService.error({ title: 'Error!', subTitle: (err as Error).message});
    }
  }
}
