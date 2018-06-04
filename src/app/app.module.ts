import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DishesService } from './services/dishes.service';
import { DishesComponent } from './components/dishes/dishes.component';
import { MenuComponent } from './components/menu/menu.component';
import { DishDetailsComponent } from './components/dish-details/dish-details.component';
import { GroupByPipe } from './pipes/group-by.pipe';

const appRoutes: Routes = [
  {
    path: 'Menu',
    component: MenuComponent,
    data: { title: 'Menu List' }
  },
  { path: '',
    redirectTo: '/Menu',
    pathMatch: 'full'
  },
  {
    path: 'dish-details/:id',
    component: DishesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    MenuComponent,
    DishDetailsComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
