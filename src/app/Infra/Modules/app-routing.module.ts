import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from 'src/app/Home/page-home/page-home.component';
import { PageCarrinhoComponent } from 'src/app/Carrinho/page-carrinho/page-carrinho.component';


const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: '/carrinho', component: PageCarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
