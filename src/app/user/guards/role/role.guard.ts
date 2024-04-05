import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../../services/user/user.service";
import { AlertService } from "../../../services/alert/alert.service";


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService, private alertService: AlertService) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin(next);
  }

  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    const userName = route.params['userName'];
    if (!this.userService.isUserExist(userName)) {
      this.alertService.error({ title: 'User does not exist', subTitle: 'You can not change this user!' });
      this.router.navigate(['user']);
      return false;
    }
    if (this.userService.isUserHasSuperAdminRole(userName)) {
      this.alertService.error({ title: 'Error', subTitle: 'You can not change SuperAdmin!' });
      this.router.navigate(['user']);
      return false;
    }

    return true;
  }
}
