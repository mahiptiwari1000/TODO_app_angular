import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { AddItemComponent } from "./add-item/add-item.component";
import { LoginAuthComponent } from "./login-auth/login-auth.component";


const routes: Routes = [
    {
     path:'',redirectTo:'/login',pathMatch:'full'
    },
    {
        path:'login',component:LoginAuthComponent
    },
    {
        path:'loggedIn',component:AddItemComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}

export const routingComponent = [LoginAuthComponent,AddItemComponent]