import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipieDetailComponent } from "./recipies/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipies/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipies/recipe-start/recipe-start.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes= [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipiesComponent, children:[
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipieDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]},
    { path: 'shopping', component: ShoppingListComponent}
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}