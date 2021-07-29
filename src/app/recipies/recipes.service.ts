import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipies.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe',
     'This is a test', 
     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg',
     [
       new Ingredient("Ingredient 1", 4), new Ingredient("Ingredient 2", 10)
     ]),
    new Recipe('A test Recipe 2',
     'This is a test 2', 
     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg',
     [
      new Ingredient("Ingredient 1", 2), new Ingredient("Ingredient 2", 9)
     ]),
  ];
  
  getRecipes() {
    return this.recipes.slice();
  }

  constructor( private slService:ShoppingListService){};

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngerdients(ingredients);
  }

  getRecipeById(id:number) {
    return this.recipes[id];
  }
  
}
