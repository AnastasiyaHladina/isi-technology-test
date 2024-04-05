import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { User } from "../../../interfaces/user";
import { Users } from "../../../mock/users";
import { UserTypesEnum } from "../../../enums/user-types";

export class DuplicatedEntityError extends Error {
  constructor() {
    super('User already exists');
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users$$: BehaviorSubject<User[]> = new BehaviorSubject(Users);

  getUsers():Observable<User[]> {
    return this.users$$.asObservable();
  }

  getUser(userName: string | null):Observable<User | undefined | null> {
    const user = this.users$$.value.find((user: User) => user.userName === userName);
    return of(user);
  }

  deleteUser(userName: string):void {
    this.users$$.next(this.users$$.value.filter((user: User) => user.userName !== userName));
  }

  updateUser(user: User, userName: string): void {
    if ((user.userName === userName) || (((user.userName !== userName)) && (!this.isUserExist(user.userName)))) {
      this.deleteUser(userName);
      user.userType = Number(user.userType);
      this.users$$.next([...this.users$$.value, user]);
      return;
    }

    throw new DuplicatedEntityError();
  }

  createUser(user: User) {
    if(!this.isUserExist(user.userName)) {
      user.userType = Number(user.userType);
      this.users$$.next([...this.users$$.value, user]);
      return;
    }
    throw new DuplicatedEntityError();
  }

  isUserHasSuperAdminRole(userName: string): boolean {
    const user = this.users$$.value.find(user => user.userName === userName);
    return user?.userType == UserTypesEnum.SuperAdmin;
  }

  isUserExist(userName: string): boolean {
    return !!this.users$$.value.find(user => user.userName === userName);
  }
}
