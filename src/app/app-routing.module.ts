import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoPage } from './photo-page/photo-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/0/0', pathMatch: 'full' },
  { path: ':albumId/:photoIndex', component: PhotoPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
