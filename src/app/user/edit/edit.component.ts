import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from "../../interfaces/user";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { filter, map, Subscription, switchMap } from "rxjs";
import { AlertService } from "../../services/alert/alert.service";
import { DuplicatedEntityError, UserService } from "../services/user/user.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .pipe(
        map((param: ParamMap) => param.get('userName') as string),
        switchMap((userName: string) => this.userService.getUser(userName)),
        filter(Boolean),
      ).subscribe(u => this.user = u);
  }

  onButtonUpdateClick(user: unknown): void {
    try {
      this.userService.updateUser(user as User, this.user.userName);
      this.router.navigate(['user']);
      this.alertService.success({ title: 'Success', subTitle: 'User successfully updated!'});
    } catch (err) {
      if (err instanceof DuplicatedEntityError) {
        this.alertService.error({ title: 'Wrong Username !', subTitle: 'You can not update existed Username'});
        return;
      }
      this.alertService.error({ title: 'Error!', subTitle: (err as Error).message});
    }

  }

  onButtonDeleteClick(): void {
    this.userService.deleteUser(this.user.userName);
    this.router.navigate(['user']);
    this.alertService.success({ title: 'Success', subTitle: 'User has been deleted!'});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
