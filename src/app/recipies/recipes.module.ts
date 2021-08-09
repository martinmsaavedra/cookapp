import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { RecipieDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipieListComponent } from './recipie-list/recipe-list.component';
import { RecipieItemComponent } from './recipie-list/recipie-item/recipie-item.component';
import { RecipiesComponent } from './recipies.component';

@NgModule({
  declarations: [
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
      RouterModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      RecipesRoutingModule,
  ]
})
export class RecipesModule {}
