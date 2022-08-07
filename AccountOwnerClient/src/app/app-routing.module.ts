import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./error-pages/not-found/not-found.component";
import {InternalServerComponent} from "./error-pages/internal-server/internal-server.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'owner', loadChildren:() => import('./owner/owner.module').then(x => x.OwnerModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: InternalServerComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
