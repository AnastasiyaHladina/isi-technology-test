import { User } from "../interfaces/user";
import { UserTypesEnum } from "../enums/user-types";

export const Users: User[] = [
  {
    userName: 'Super Admin',
    firstName: 'Unknown',
    lastName: 'Unknown',
    email: 'admin@gmail.com',
    password: '111111111',
    userType: UserTypesEnum.SuperAdmin
  },
  {
    userName: 'Matthew',
    firstName: 'Matthew',
    lastName: 'Perry',
    email: 'matthew@gmail.com',
    password: '123H45679f',
    userType: UserTypesEnum.Admin
  },
  {
    userName: 'Winona',
    firstName: 'Winona',
    lastName: 'Ryder',
    email: 'ryder@gmail.com',
    password: '!qwePlp0w',
    userType: UserTypesEnum.Admin
  },
  {
    userName: 'Neo',
    firstName: 'Keanu',
    lastName: 'Reeves',
    email: 'keanu@gmail.com',
    password: 'Pje7Vuw=uYmq',
    userType: UserTypesEnum.Driver
  },
  {
    userName: 'Emma Stone',
    firstName: 'Emma',
    lastName: 'Stone',
    email: 'Emma.Stone@gmail.com',
    password: 'Pje7Vuw=uYmq',
    userType: UserTypesEnum.Driver
  },
  {
    userName: 'Ken',
    firstName: 'Ryan',
    lastName: 'Gosling',
    email: 'ken@gmail.com',
    password: 'Pje7Vuw=uYmq',
    userType: UserTypesEnum.Driver
  },
  {
    userName: 'Chris',
    firstName: 'Christian',
    lastName: 'Bale',
    email: 'bale@gmail.com',
    password: '221ddwA=Ldv',
    userType: UserTypesEnum.Driver
  },
  {
    userName: 'Tilda',
    firstName: 'Katherine Matilda',
    lastName: 'Swinton',
    email: 'swinton-tilda@gmail.com',
    password: '=Pdw9Ub621',
    userType: UserTypesEnum.Driver
  },
];
