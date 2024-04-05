import { UserTypesEnum } from "../enums/user-types";

export interface User {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: UserTypesEnum
}
