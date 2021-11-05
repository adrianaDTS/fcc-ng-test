import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [{
  path: 'first-page/:id', component: FirstPageComponent
}, {
  path: 'second-page', component: SecondPageComponent, canActivate: [AppGuardGuard],
  /* You add the child routes within the parent route in an array */
  children: [
    { path: 'child-a', component: ChildAComponent },
    { path: 'child-b', component: ChildBComponent },
  ]
}, {
  path: '**', component: ErrorPageComponent
}];

/* The order of routes it's important, because the router uses a
first-match-wins strategy when matching routes. That means more specific
routes should be placed above less specific routes */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
