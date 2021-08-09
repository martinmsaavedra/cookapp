import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageSerivce } from "../shared/data-storage.service";
import { RecipesService } from "./recipes.service";
import { Recipe } from "./recipies.model";

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor( private dataStorage: DataStorageSerivce,
        private recipeService: RecipesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipeService.getRecipes();
        if (recipes.length === 0){
            return this.dataStorage.fetchRecipes();
        }
        else {
            return recipes;
        }
    }
}