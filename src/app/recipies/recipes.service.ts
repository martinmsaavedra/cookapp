import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipies.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('A test Recipe',
  //    'This is a test', 
  //    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg',
  //    [
  //      new Ingredient("Ingredient 1", 4), new Ingredient("Ingredient 2", 10)
  //    ]),
  //   new Recipe('A test Recipe 2',
  //    'This is a test 2', 
  //    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg',
  //    [
  //     new Ingredient("Ingredient 1", 2), new Ingredient("Ingredient 2", 9)
  //    ]),
  // ];

  private recipes: Recipe[] = [];
  
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

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  
  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
