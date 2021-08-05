import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';
import { CanLoadAuthGuard } from './services/can-load-auth.guard';
import { CustomPreloadingStrategy } from './services/custom-preloading-strategy';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
  {
    path: "courses",
    loadChildren: () => import('./courses/courses.module')
      .then(m => m.CoursesModule),
    // canLoad: [CanLoadAuthGuard],
    canActivate: [AuthGuard],
    data: {
      preload: 'auth',
    },
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        preloadingStrategy: CustomPreloadingStrategy,
      }),
  ],
  exports: [RouterModule],
  providers: [
    CanLoadAuthGuard,
    AuthGuard,
    CustomPreloadingStrategy,
  ],
})
export class AppRoutingModule {

}
