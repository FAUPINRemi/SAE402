import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ModelComponent } from './components/model/model.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
const routes: Routes = [
  { path: 'acceuil' , component: AcceuilComponent },
  { path: 'model' , component: ModelComponent },
  { path: 'a-propos' , component: AProposComponent },
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }