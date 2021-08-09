import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesService } from '../recipies/recipes.service';
import { Recipe } from '../recipies/recipies.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageSerivce {
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    const url =
      'https://cook-app-21ef6-default-rtdb.firebaseio.com/recipes.json';
    this.http.put(url, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    const url =
      'https://cook-app-21ef6-default-rtdb.firebaseio.com/recipes.json';
    return this.http.get<Recipe[]>(url).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
