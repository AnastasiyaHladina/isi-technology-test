import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet, Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { SharedModule } from "../shared/shared.module";
import { RoleGuard } from "./guards/role/role.guard";
import { UserService } from "./services/user/user.service";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'edit/:userName', component: EditComponent, canActivate: [RoleGuard] },
    ],
  },
];

@NgModule({
    declarations: [UserComponent, CreateComponent, EditComponent ],
    imports: [
        RouterModule.forChild(routes),
        RouterOutlet,
        AsyncPipe,
        NgFor,
        RouterLink,
        CommonModule,
        SharedModule
    ],
  providers: [ RoleGuard, UserService ]
})
export class UserModule { }
